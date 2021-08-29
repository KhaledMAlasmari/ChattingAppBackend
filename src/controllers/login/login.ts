import {Router} from 'express'
import jwt from 'jsonwebtoken'
import User from '../../database/Models/User'
import bcrypt from 'bcrypt' 
import userInterface from '../../helpers/interfaces/userInterface'
const loginRouter = Router()


loginRouter.post('/', async (request, response) => {
	const body = request.body

	const user: userInterface = await User.findOne({ username: body.username })

	const passwordCorrect = user === null
		? false
		: await bcrypt.compare(body.password, user.hashedPassword)


	if (!(user && passwordCorrect)) {
		return response.status(401).json({
			error: 'invalid username or password'
		})
	}


	
	const userForToken = {
		username: user.username,
		id: user._id,
	}

	const token = jwt.sign(userForToken, process.env.JWTSECRET, { expiresIn: 60*60 }
	)

	response
		.status(200)
		.send({ token, username: user.username, name: user.name })
})


export default loginRouter