import User from '../database/Models/User'
import Conversion from '../database/Models/Conversion'
import logger from '../utils/logger'
import { Socket } from 'socket.io'
import mongoose from 'mongoose'
const addContact = (socket: Socket): void => {
	socket.on('addContact', async (request) => {
		try{
			const contactInfo: ContactInfo = JSON.parse(JSON.stringify(request))
			contactInfo.username = socket['username']
			validateRequest(contactInfo)
			await addNewContact(contactInfo)
			await addNewConversion(contactInfo)
			socket.emit('addContact', true)
		}
		catch(error){
			socket.emit('addContact', false)
			logger.error(error)
		}
	})
}

const validateRequest = (contactInfo: ContactInfo) => {
	if(!contactInfo.username){
		throw new Error('The username is incorrect')
	}

	if(!contactInfo.contactUsername){
		throw new Error('The contact name is incorrect')
	}
}


const addNewContact = async (contactInfo: ContactInfo) => {
	const user1 = await User.findOne({username: contactInfo.username})
	const user2 = await User.findOne({username: contactInfo.contactUsername})
	user1.contacts = user1.contacts.concat(user2._id)
	user2.contacts = user2.contacts.concat(user1._id)
	await user1.save()
	await user2.save()
}

const addNewConversion = async (contactInfo: ContactInfo) => {
	const user1 = await User.findOne({username: contactInfo.username})
	const user2 = await User.findOne({username: contactInfo.contactUsername})
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

interface ContactInfo {
	username: string,
	contactUsername: string
}

export default addContact