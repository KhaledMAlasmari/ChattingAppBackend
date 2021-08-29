import { NextFunction, Request, Response, Router } from 'express'
import Conversion from '../../database/Models/Conversion'
import Message from '../../database/Models/Message'
import User from '../../database/Models/User'
import MessageInterface from '../../helpers/interfaces/MessageInterface'
const getUserChats = Router()
getUserChats.get('/', async (request: Request, response: Response, next: NextFunction) => {
	try{
		const chats = await databaseQuery(request['userId'])
		return response.status(200).send(chats)
	}
	catch(error){
		next(error)
	}
})

const databaseQuery = async (userId) => {
	const conversions = (await User.findOne({_id: userId})).conversions
	if(conversions.length == 0)
		return {}
	
	const chats: Array<Chat> = []
	for(let i = 0; i < conversions.length; i++){
		const messages = await Message.find({conversionId: conversions[i]}, {text: 1, image: 1, isRead: 1, timeSent: 1, timeRead: 1, senderUsername: 1, reciverUsername: 1})
		const participantes: Array<any> = (await Conversion.findOne({_id: conversions[i]}).populate('participants')).participants
		chats.push({
			username: participantes[0].id !== userId ? participantes[0].username: participantes[1].username,
			Messages: messages
		})
	}
	return chats
}

interface Chat {
	username: string,
	Messages: Array<MessageInterface>
}


export default getUserChats