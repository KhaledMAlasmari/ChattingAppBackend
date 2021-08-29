import User from '../database/Models/User'
import userInterface from './interfaces/userInterface'

const getUsersFromDb = async (): Promise<userInterface[]> => {
	const users = await User.find({})
	return users.map(u => u.toJSON())
}

export default getUsersFromDb