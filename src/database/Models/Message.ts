import mongoose from 'mongoose'
import MessageInterface from '../../helpers/interfaces/MessageInterface'
const MessageSchema = new mongoose.Schema({
	senderUsername: String,
	reciverUsername: String,
	text : String,
	image: { data: Buffer, contentType: String },
	isRead: Boolean,
	timeSent: Date,
	timeRead: Date,
	conversionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Conversion',
	},
})


MessageSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})


const Message = mongoose.model<MessageInterface>('Message', MessageSchema, 'messages')


export default Message
