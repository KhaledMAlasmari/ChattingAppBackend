import { Socket } from 'socket.io'
import ConnectedSocket from '../database/Models/ConnectedSocket'
import Conversion from '../database/Models/Conversion'
import Message from '../database/Models/Message'
import User from '../database/Models/User'
import SocketInfo from '../helpers/interfaces/SocketInfo'
import logger from '../utils/logger'

const markMessagesAsRead = (socket: Socket): void => {
	socket.on('markMessagesAsRead', async (request) => {
		try{
			const messageInfo: requestData = JSON.parse(JSON.stringify(request))
			await queryMessage(messageInfo, socket['userId'])
			await emitMessageStatusIfSenderIsOnline(socket, messageInfo)
		}
		catch(error){
			socket.emit('markMessagesAsRead', {username: socket['username'], messagesRead: false})
			logger.error(error)
		}
	})
}

const queryMessage = async (messageInfo: requestData, userId: string) => {
	console.log(messageInfo.senderUsername)
	const contact = await User.findOne({username: messageInfo.senderUsername})
	const participants = [userId, contact._id].sort()
	const conversion = await Conversion.findOne({participants})
	await Message.updateMany({conversionId: conversion._id, senderUsername: messageInfo.senderUsername, isRead: false}, {isRead: true, timeRead: new Date()})
}

const emitMessageStatusIfSenderIsOnline = async (socket: Socket, messageInfo: requestData) => {
	const senderIsOnline: SocketInfo = await ConnectedSocket.findOne({username: messageInfo.senderUsername})
	if(senderIsOnline)
		socket.to(senderIsOnline.socketId).emit('markMessagesAsRead', {username: socket['username'], messagesRead: true, timeRead: new Date()})

}


interface requestData {
	senderUsername: string
}


export default markMessagesAsRead