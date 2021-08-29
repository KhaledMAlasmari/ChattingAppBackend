import { NextFunction, Request, Response, Router } from 'express'
import Conversion from '../../database/Models/Conversion'
import Message from '../../database/Models/Message'
import User from '../../database/Models/User'

const markChatsRead = Router()
markChatsRead.put('/:contactUsername', async (request: Request, response: Response, next: NextFunction) => {
	try{
		await databaseQuery(request['userId'], request.params.contactUsername)
		return response.status(200)
	}
	catch(error){
		next(error)
	}
})

const databaseQuery = async (userId: string, contactUsername: string) => {
	const contact = await User.findOne({username: contactUsername})
	const participants = [userId, contact._id].sort()
	const conversion = await Conversion.findOne({participants})
	await Message.updateMany({conversionId: conversion._id, senderUsername: contactUsername, isRead: false}, {isRead: true, timeRead: new Date()})
}

export default markChatsRead