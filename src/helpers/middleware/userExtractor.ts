import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import tokenInterface from '../interfaces/tokenInterface'


const userExtractor = (request : Request, response: Response, next: NextFunction): void => {
	const token = request['token']
	if(token){
		const decodedToken = jwt.verify(token, process.env.JWTSECRET) as tokenInterface
		request['userId'] = decodedToken.id
		request['username'] = decodedToken.username
	}
	next()
}


export default userExtractor