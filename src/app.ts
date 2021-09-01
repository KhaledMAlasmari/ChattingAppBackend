import express from 'express'
import cors from 'cors'
import loginRouter from './controllers/login/loginRouter'
import usersRouter from './controllers/users/usersRouter'
import errorHandler from './helpers/middleware/errorHandler'
import tokenExtractor from './helpers/middleware/tokenExtractor'
import userExtractor from './helpers/middleware/userExtractor'
import chatsRouter from './controllers/chats/chatsRouter'
import path from 'path'


const app = express()
app.use(cors())
app.use(express.json())
app.use(tokenExtractor)
app.use(userExtractor)

// routes
app.use(chatsRouter)
app.use(loginRouter)
app.use(usersRouter)

if (process.env.NODE_ENV === 'production') {
	const publicPath = path.join(__dirname, '../public')
	app.use(express.static(publicPath))
	app.use('*', express.static(publicPath))
}


// error handler
app.use(errorHandler)

export default app
