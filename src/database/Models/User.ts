import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import userInterface from '../../helpers/interfaces/userInterface'

const userSchema = new mongoose.Schema({
	username : {
		type: String,
		unique: true,
	},
	name: String,
	email: String,
	hashedPassword: String,
	contacts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	conversions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Conversion'
		}
	],
	lastOnline: Date,
	avatar: { data: Buffer, contentType: String },
})


userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v

	}
})


const User = mongoose.model<userInterface>('User', userSchema, 'User')

userSchema.plugin(uniqueValidator)

export default User
