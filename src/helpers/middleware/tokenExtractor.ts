import {Request, Response, NextFunction} from 'express'
const tokenExtractor = (request : Request, response: Response, next: NextFunction) : void => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		request['token'] = authorization.split(' ')[1]
	}
	next()
}


export default tokenExtractor