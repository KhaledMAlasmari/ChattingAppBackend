import mongoose from 'mongoose'
import config from '../utils/config'

const connectToDatabase = async (): Promise<void> => {
	const DBURL = config.mongoUrl
	await mongoose.connect(DBURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
}

export default connectToDatabase