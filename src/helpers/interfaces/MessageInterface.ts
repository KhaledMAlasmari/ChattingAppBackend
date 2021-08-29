import mongoose from 'mongoose'
interface MessageInterface {
	text : string,
	image: { data: Buffer, contentType: string },
	isRead: boolean,
	timeSent: Date,
	timeRead: Date,
	conversionId: mongoose.Types.ObjectId,
	senderUsername: string,
	reciverUsername: string,
}


export default MessageInterface