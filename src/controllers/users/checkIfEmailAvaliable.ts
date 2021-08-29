import { Router } from 'express'
import User from '../../database/Models/User'


const checkIfEmailAvaliable = Router()

checkIfEmailAvaliable.get('/:email', async (request, response) => {

	const user = await User.findOne({email: request.params.email})
	if(!user)
		return response.sendStatus(200)
	return response.sendStatus(403)

})



export default checkIfEmailAvaliable