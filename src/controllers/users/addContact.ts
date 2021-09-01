import { NextFunction, Request, Response, Router } from 'express'
import Conversion from '../../database/Models/Conversion'
import User from '../../database/Models/User'
import mongoose from 'mongoose'
const addContactToUser = Router()
addContactToUser.put('/:contactUsername', async (request: Request, response: Response, next: NextFunction) => {
	try{
		const contactUsername: string = request.params.contactUsername
		await validateRequest(contactUsername, request['username'])
		await addNewContact(contactUsername, request['username'])
		await addNewConversion(contactUsername, request['username'])
		return response.sendStatus(201)
	}
	catch(error){
		next(error)
	}

})


const validateRequest = async (contactUsername: string, username: string) => {
	if(!contactUsername){
		throw new Error('You didn\'t enter a username')
	}
	if(contactUsername === username)
		throw new Error('You trolling, you can\'t add yourself tho')
	
	const contactUser = await User.findOne({username: contactUsername})
	const user = await User.findOne({username})
	if(!contactUser)
		throw new Error('The username doesn\'t exist ')

	if(user.contacts.includes(contactUser._id))
		throw new Error('The user is already added!')
}


const addNewContact = async (contactUsername: string, username: string) => {
	const user1 = await User.findOne({username})
	const user2 = await User.findOne({username: contactUsername})
	user1.contacts = user1.contacts.concat(user2._id)
	user2.contacts = user2.contacts.concat(user1._id)
	await user1.save()
	await user2.save()
}

const addNewConversion = async (contactUsername: string, username: string) => {
	const user1 = await User.findOne({username})
	const user2 = await User.findOne({username: contactUsername})
	const participants = [user1._id, user2._id].sort().map((item) => {return mongoose.Types.ObjectId(item)})
	const conversion = new Conversion({
		participants,
	})
	const saveConersion = await conversion.save()
	user1.conversions = user1.conversions.concat(saveConersion._id)
	user2.conversions = user2.conversions.concat(saveConersion._id)
	await user1.save()
	await user2.save()

}

export default addContactToUser