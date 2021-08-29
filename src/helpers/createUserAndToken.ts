import User from '../database/Models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

interface idAndToken {
	id: string,
	username: string,
	token: string
}


const getUserAndToken = async (username: string, password: string, name: string): Promise<idAndToken>  => {
	const saltRounds = 10
	const hashedPassword = await bcrypt.hash(password, saltRounds)
	const userObject = new User({
		username,
		hashedPassword,
		name,
		contacts: [],
	})
	
	const user = await userObject.save()

	const userForToken = {
		username: user.username,
		id: user._id,
	}

	const token = jwt.sign(userForToken, process.env.JWTSECRET, { expiresIn: 60*60 })

	return {id: userForToken.id, username: user.username, token}
}


export default getUserAndToken