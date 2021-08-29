import express from 'express'
import {validationResult} from 'express-validator'
const errorHandler = (error: Error, request : express.Request, response: express.Response, next: express.NextFunction): Express.Response => {
	const errors = validationResult(request)
	if (!errors.isEmpty()) {
		return response.status(400).json({ errors: errors.array() })
	}

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' })
	}

	else if(error.name === 'ValidationError'){
		return response.status(400).send({ error: error.message })
	}

	else if (error.name === 'JsonWebTokenError') {
		return response.status(401).json({
			error: 'invalid token'
		})
	}

	else if (error.name === 'TokenExpiredError') {
		return response.status(401).json({
			error: 'token expired'
		})
	}
	return response.status(400).send({ error: error.message })
}

export default errorHandler
