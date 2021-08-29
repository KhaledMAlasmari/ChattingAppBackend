import ConnectedSocket from '../database/Models/ConnectedSocket'

const removeOldSocketsFromDb = async () => {
	await ConnectedSocket.deleteMany({})
}

export default removeOldSocketsFromDb