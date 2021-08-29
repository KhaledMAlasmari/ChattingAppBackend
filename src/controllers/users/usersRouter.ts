import {Router} from 'express'
import createUser from './createUser'
import checkIfUsernameAvaliable from './checkIfUsernameAvaliable'
import checkIfEmailAvaliable from './checkIfEmailAvaliable'
import addContactToUser from './addContact'
import tokenValidator from '../../helpers/middleware/tokenValidator'
import getUserContacts from './getUserContacts'
import getUserChats from './getUserChats'
import updateUserAvatar from './updateUserAvatar'
import updateDisplayedUserName from './updateDisplayedUsername'
const usersRouter = Router()

usersRouter.use('/api/users/checkIfUsernameAvaliable', checkIfUsernameAvaliable)
usersRouter.use('/api/users/checkIfEmailAvaliable', checkIfEmailAvaliable)
usersRouter.use('/api/users/newUser', createUser)
usersRouter.use('/api/users/addContact', tokenValidator, addContactToUser)
usersRouter.use('/api/users/getContacts', tokenValidator, getUserContacts)
usersRouter.use('/api/users/getChats', tokenValidator, getUserChats)
usersRouter.use('/api/users/updateAvatar', tokenValidator, updateUserAvatar)
usersRouter.use('/api/users/updateDisplayedName', tokenValidator, updateDisplayedUserName)


export default usersRouter