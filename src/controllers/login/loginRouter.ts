import {Router} from 'express'
import login from './login'
import tokenValidatorRouter from './validateToken'


const loginRouter = Router()


loginRouter.use('/login/', login)
loginRouter.use('/login/validateToken', tokenValidatorRouter)



export default loginRouter