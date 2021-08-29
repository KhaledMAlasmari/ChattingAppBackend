import { NextFunction, Request, Response, Router } from 'express'
import User from '../../database/Models/User'

const updateUserAvatar = Router()


updateUserAvatar.put('/', async(request: Request, response: Response, next: NextFunction) => {
	const {image}: {image: string} = request.body
	const isValidImage = Buffer.from(image, 'base64')
	try{
		if(isValidImage){
			await databaseQuery(isValidImage, request['userId'])
			return response.status(200)
		}
		return response.status(400)
	}
	catch(error){
		next(error)
	}


})


const databaseQuery = async (image: Buffer, userId: string) => {
	await User.findByIdAndUpdate(userId, {avatar: image})
}

export default updateUserAvatar