import { Socket } from 'socket.io'
import Conversion from '../database/Models/Conversion'
import Message from '../database/Models/Message'
import logger from '../utils/logger'
import mongoose from 'mongoose'
import User from '../database/Models/User'
import ConnectedSocket from '../database/Models/ConnectedSocket'
import SocketInfo from '../helpers/interfaces/SocketInfo'

const sendMessage = (socket: Socket): void => {
	socket.on('sendMessage', async (request) => {
		try{
			const messageInfo: MessageInterface = JSON.parse(JSON.stringify(request))
			messageInfo.senderUsername = socket['username']
			logger.info(JSON.stringify(messageInfo))
			validateRequest(messageInfo)
			const {text, reciverUsername, timeSent, timeRead, image} = await queryMessage(messageInfo)
			const reciverIsOnline: SocketInfo = await ConnectedSocket.findOne({username: reciverUsername})
			if(reciverIsOnline){
				await markMessageAsReadInDb(messageInfo, socket['userId'])
				await emitMessageIfReciverIsOnline(socket, messageInfo, reciverIsOnline)
			}
			socket.emit('sendMessage', {text, image, reciverUsername, timeSent, timeRead, isRead: reciverIsOnline ? true: false})
		}
		catch(error){
			socket.emit('sendMessage', false)
			logger.error(error)
		}
	})
}

const queryMessage = async (messageInfo: MessageInterface) => {
	// sort and then typecast 
	const participants = await sortAndTypecast(messageInfo)
	const conversion = await Conversion.findOne({participants})
	const message = new Message({
		senderUsername: messageInfo.senderUsername,
		reciverUsername: messageInfo.reciverUsername,
		text: String(messageInfo.text),
		image: messageInfo.image,
		isRead: false,
		timeSent: new Date(),
		timeRead: null,
		conversionId: conversion._id
	})
	await message.save()
	return message.toJSON()
}

const sortAndTypecast = async (messageInfo: MessageInterface) => {
	const sender = await User.findOne({username: messageInfo.senderUsername})
	const reciver = await User.findOne({username: messageInfo.reciverUsername})
	const participants = [sender._id, reciver._id]
		.sort()
		.map((item) => {
			return mongoose.Types.ObjectId(item)})
	return participants
}

const validateRequest = (messageInfo: MessageInterface) => {
	if(!messageInfo.senderUsername){
		throw Error('The sender Username isn\'t included in the request ')
	}

	if(!messageInfo.reciverUsername){
		throw Error('The reciver Username isn\'t included in the request ')
	}

	if(!messageInfo.text && !messageInfo.image){
		throw new Error('No content (photo/text) is sent in the request')
	}
}


const emitMessageIfReciverIsOnline = async (socket: Socket, {text, senderUsername, reciverUsername, timeSent, image, timeRead, isRead}: MessageInterface, reciverInfo: SocketInfo) => {
	console.log(`${reciverInfo.username} ${reciverInfo.socketId} nibba is online yo`)
	socket.to(reciverInfo.socketId).emit('reciveMessage', {text, senderUsername, reciverUsername, timeSent, image, timeRead, isRead})


}

const markMessageAsReadInDb = async (messageInfo: MessageInterface, userId: string) => {
	const contact = await User.findOne({username: messageInfo.reciverUsername})
	const participants = [userId, contact._id].sort()
	const conversion = await Conversion.findOne({participants})
	await Message.updateMany({conversionId: conversion._id, reciverUsername: messageInfo.reciverUsername , isRead: false}, {isRead: true, timeRead: new Date()})
	
}


interface MessageInterface {
	senderUsername: string,
	reciverUsername: string,
	text: string,
	image?: string,
	isRead: boolean,
	timeSent: Date,
	timeRead: Date,
	conversionId: string,
}

export default sendMessage