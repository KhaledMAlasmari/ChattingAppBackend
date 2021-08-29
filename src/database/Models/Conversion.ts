import mongoose from 'mongoose'
import ConversionInterface from '../../helpers/interfaces/ConversionInterface'
const conversionSchema = new mongoose.Schema({
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	]
})


conversionSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})


const Conversion = mongoose.model<ConversionInterface>('Conversion', conversionSchema, 'Conversion')


export default Conversion
