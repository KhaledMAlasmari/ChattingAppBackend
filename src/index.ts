import app from './app'
import http from 'http'
import config from './utils/config'
import connectToDatabase from './database/connectToDatabase'
import { Server } from 'socket.io'
import sendMessage from './listeners/sendMessage'
import socketTokenValidator from './listeners/middleware/socketTokenValidator'
import logger from './utils/logger'
import addConnectedSocketsToDb from './listeners/middleware/addConnectedSocketToDb'
import removeDisconnectedSocketFromDb from './listeners/removeDisconnectedSocketFromDb'
import removeOldSocketsFromDb from './helpers/removeOldSocketsFromDb'
import markMessagesAsRead from './listeners/markMessagesAsRead'

const httpServer = http.createServer(app)
const socketServer = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	}
})

// add socket id to database when connecting for the first time

socketServer.on('connection', (socket) => {
	socketTokenValidator(socket)
	addConnectedSocketsToDb(socket)
	logger.info(`${socket.id} is connected!`)
	//addContact(socket)
	sendMessage(socket)
	markMessagesAsRead(socket)


	socket.on('disconnect', () => {
		removeDisconnectedSocketFromDb(socket)
	})
})



httpServer.listen(config.PORT, async () => {
	await connectToDatabase()
	await removeOldSocketsFromDb()
	logger.info(`The server and socket are listening on http://localhost:${config.PORT}`)
})
