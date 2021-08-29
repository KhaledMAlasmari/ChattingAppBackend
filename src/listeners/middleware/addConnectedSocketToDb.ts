import { Socket } from 'socket.io'
import ConnectedSocket from '../../database/Models/ConnectedSocket'
import logger from '../../utils/logger'

const addConnectedSocketsToDb = (socket: Socket): void => {
	socket.on('userIsOnline', async () => {
		try{
			await ConnectedSocket.deleteMany({username: socket['username']})
			const newConnectedSocket = new ConnectedSocket({
				username: socket['username'],
				socketId: socket.id,
			})
			await newConnectedSocket.save()
		}
		catch(error){
			logger.error(error)
		}
	})
}

export default addConnectedSocketsToDb