import { Router } from 'express'
import User from '../../database/Models/User'


const checkIfUsernameAvaliable = Router()

checkIfUsernameAvaliable.get('/:username', async (request, response) => {

	const user = await User.findOne({username: request.params.username})
	if(!user)
		return response.sendStatus(200)
	return response.sendStatus(403)

})



export default checkIfUsernameAvaliable