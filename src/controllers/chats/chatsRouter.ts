import {Router} from 'express'
import tokenValidator from '../../helpers/middleware/tokenValidator'
import markChatsRead from './markChatsRead'

const chatsRouter = Router()

chatsRouter.use('/api/chats/markRead', tokenValidator, markChatsRead)

export default chatsRouter
