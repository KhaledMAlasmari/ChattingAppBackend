import { Socket } from 'socket.io'
import ConnectedSocket from '../database/Models/ConnectedSocket'
import User from '../database/Models/User'
import logger from '../utils/logger'

const removeDisconnectedSocketFromDb = async (socket: Socket): Promise<void> => {
	try {
		if(socket['username']){
			await ConnectedSocket.deleteOne({socketId: socket.id,})
			await setUserLastOnlineStatus(socket['username'])
		}
	}
	catch (error) {
		logger.error(error)
	}
}

const setUserLastOnlineStatus = async (username : string) => {
	const user = await User.findOne({username})
	user.lastOnline = new Date()
	await user.save()
}

export default removeDisconnectedSocketFromDb
