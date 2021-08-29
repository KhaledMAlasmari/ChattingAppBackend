import mongoose from 'mongoose'


interface userInterface {
	_id: mongoose.Types.ObjectId,
	username: string,
	name: string,
	email: string,
	hashedPassword: string,
	contacts: Array<mongoose.Types.ObjectId>,
	conversions: Array<mongoose.Types.ObjectId>,
	lastOnline: Date,
	avatar: Buffer,

}

export default userInterface