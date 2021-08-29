import jwt from 'jsonwebtoken'
import {Socket} from 'socket.io'
import logger from '../../utils/logger'

const socketTokenValidator = (socket: Socket): void => {
	socket.use((request, next) => {
		try{
			const token = socket.handshake.headers.authorization.split(' ')[1]
			console.log({token})
			const payload = jwt.verify(token, process.env.JWTSECRET)
			socket['userId'] = payload['id']
			socket['username'] = payload['username']
			next()
		}
		catch(error){
			socket.emit(request[0], false)
			logger.error(error)
		}
	})
}

export default socketTokenValidator
