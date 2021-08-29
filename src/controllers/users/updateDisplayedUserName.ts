import { NextFunction, Request, Response, Router } from 'express'
import User from '../../database/Models/User'

const updateDisplayedUserName = Router()

updateDisplayedUserName.put('/:name', async(request: Request, response: Response, next: NextFunction) => {
	const name: string =  request.params.name
	try{
		await databaseQuery(name, request['userId'])
	}
	catch(error){
		next(error)
	}
})


const databaseQuery = async (name: string, userId: string) => {
	if(!name)
		throw Error('name isn\'t valid')
	await User.findByIdAndUpdate(userId, {name})
}


export default updateDisplayedUserName