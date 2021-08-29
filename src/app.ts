import express from 'express'
import cors from 'cors'
import loginRouter from './controllers/login/loginRouter'
import usersRouter from './controllers/users/usersRouter'
import errorHandler from './helpers/middleware/errorHandler'
import tokenExtractor from './helpers/middleware/tokenExtractor'
import userExtractor from './helpers/middleware/userExtractor'
import chatsRouter from './controllers/chats/chatsRouter'


const app = express()
app.use(cors())
app.use(express.json())

app.use(tokenExtractor)
app.use(userExtractor)

// routes
app.use(chatsRouter)
app.use(loginRouter)
app.use(usersRouter)


// error handler
app.use(errorHandler)

export default app
