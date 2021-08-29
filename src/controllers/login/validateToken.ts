import {NextFunction, Router} from 'express'
import jwt from 'jsonwebtoken'


const tokenValidatorRouter = Router()

tokenValidatorRouter.get('/', async (request, response, next: NextFunction) => {
	try{
		const token = request['token']
		const verify = jwt.verify(token, process.env.JWTSECRET)
		if(verify)
			return response.status(200)
	}
	catch(error){
		next(error)
	}


})


export default tokenValidatorRouter