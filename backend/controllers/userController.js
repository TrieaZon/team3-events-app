import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

//authenticate 
const authUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body   
  const user = await User.findOne({email})  
  //https://mongoosejs.com/docs/queries.html

  //matchPassword userModel
  if (user && await user.matchPassword(password)){
    return res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email/password')
  } 
})



const getUserProfile = asyncHandler(async(req, res) => {
  res.json({message: 'success'})
  const user = await User.findById(req.user._id)
  if(user) {
    res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
  } else{
    res.status(404)
    throw new Error('User was not found')
  }
})


export {authUser, getUserProfile}