import mongoose from 'mongoose'
interface ConversionInterface {
	participants: Array<mongoose.Types.ObjectId>,
}


export default ConversionInterface