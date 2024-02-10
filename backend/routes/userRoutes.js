import express from 'express'
import {authUser} from  '../controllers/userController.js'

const router = express.Router()

//@desc authenticate and gen token
//@route post/api/user/login
//@acess   public

router.post('/login', authUser)

export default router