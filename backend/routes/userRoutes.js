import express from 'express'
import {authUser, getUserProfile, updateUserProfile, registerUser} from  '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

//@desc authenticate and gen token
//@route post  /api/user/login
//@acess   public
router.post('/login', authUser)


//@desc register
//@route post   /api/users
//@access   public
router.route('/').post(registerUser)


//@desc get profile
//@route get  /api/users/profile
//@access  private
router.route('/profile').get(protect, getUserProfile)

//@access private
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

// router.route('/profile').get(protect,getUserProfile)
// router.route('/profile').get(protect,updateUserProfile)




export default router