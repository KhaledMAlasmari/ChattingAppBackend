import User from '../../database/Models/User'
import {Router} from 'express'
import bcrypt from 'bcrypt'
const createUser = Router()


createUser.post('/', async (request, response, next) => {
	try{
		const body = request.body
		const saltRounds = 10
		const hashedPassword = await bcrypt.hash(body.password, saltRounds)
		const checkUsername = checkUsernameRequirements(body.username, response)
		const checkPassword = checkPasswordRequirements(body.password, response)
		const checkEmail = checkEmailRequirements(body.email, response)
		const checkName = checkNameRequirements(body.name, response)
		if(checkUsername)
			return checkUsername

		if(checkEmail)
			return checkEmail

		if(checkName)
			return checkName

		if(checkPassword)
			return checkPassword
		

		const user = new User({
			username: body.username,
			email: body.email,
			name: body.name,
			hashedPassword,
		})
		const savedUser = await user.save()
		return response.status(201).json(savedUser)
	}
	catch(error){
		next(error)
	}
})

// you could use regex or a library to validate the email or something but I can't be bothered lmao
// maybe you could send a confirmation mail to the user (?)
const checkEmailRequirements = (email: string, response) => {
	if(!email)
		return response.status(400).json({error : 'the email is incorrect or doesn\'t exist'})

}

const checkNameRequirements = (name: string, response) => {
	if(!name)
		return response.status(400).json({error : 'you didn\'t enter a name or smth lol'})

}


const checkUsernameRequirements = (username : string, response) => {
	if(username.length < 3){
		return response.status(400).json({error : 'username length is too short, must be greater than 3'})
	}

	else if(username.match('\\W')){
		return response.status(400).json({error : 'username shouldnt contain symbols'})
	}

}


const checkPasswordRequirements = (password: string, response) => {
	if(password.length < 6){
		return response.status(400).json({error : 'password length is too short, must be greater than 6'})
	}

	/*
	implement strict password checking if possiable

	else if(password.match('')){
		return response.status(400).json({error : 'password is weak'})
	}
	*/
}

const validateRequest = (username: string, name: string, email: string, password: string) => {
	if(!email)
		throw Error('the email is incorrect or doesn\'t exist')
	
	if(!name)
		throw Error('you didn\'t enter a name or smth lol')

	if(username.length < 3){
		throw Error('username length is too short, must be greater than 3')
	}

	else if(username.match('\\W')){
		throw Error('username shouldnt contain symbols')
	}

	if(password.length < 6){
		throw Error('password length is too short, must be greater than 6')
	}
	/*
	implement strict password checking if possiable

	else if(password.match('')){
		throw Error('Yo password is weak tho)
	}
	*/
}





export default createUser