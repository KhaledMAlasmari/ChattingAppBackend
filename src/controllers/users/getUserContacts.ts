import { NextFunction, Request, Response, Router } from 'express'
import User from '../../database/Models/User'
const getUserContacts = Router()
getUserContacts.get('/', async (request: Request, response: Response, next: NextFunction) => {
	try{
		const contacts = await databaseQuery(request['username'])
		return response.status(200).send(contacts)
	}
	catch(error){
		next(error)
	}
})

const databaseQuery = async (username) => {
	const user = await User.findOne({username}).populate('contacts', 'username name lastOnline avatar')
	user.lastOnline
	return user.contacts
}


export default getUserContacts