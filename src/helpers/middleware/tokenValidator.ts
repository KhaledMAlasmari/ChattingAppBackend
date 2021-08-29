import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'
import tokenInterface from '../interfaces/tokenInterface'

const tokenValidator = (request : Request, response: Response, next: NextFunction): Response => {
	const token = request['token']
	const decodedToken = jwt.verify(token, process.env.JWTSECRET) as tokenInterface
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}
	next()
}


export default tokenValidator


