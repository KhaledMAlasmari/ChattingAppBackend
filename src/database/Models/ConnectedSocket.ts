import mongoose from 'mongoose'
import SocketInfo from '../../helpers/interfaces/SocketInfo'
const ConnectedSocketSchema = new mongoose.Schema({
	username: String,
	socketId: String,

})


ConnectedSocketSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})


const ConnectedSocket = mongoose.model<SocketInfo>('ConnectedSocket', ConnectedSocketSchema, 'ConnectedSockets')



export default ConnectedSocket
