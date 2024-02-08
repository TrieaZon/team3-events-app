import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


//organization  should this be its own model?
const organizationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  website: {
    type: String,
  },
  socialMedia: {    //own schema?
    type: String,
  }
  image: {
    type: String,
  },
  numFollows: {      //counter update upon follow button...
    type: Number,     //followSchema?
    default: 0
  },
  description: {
    type: String,
  }
},
  {
    timestamps: true
})


//user
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  isOrganizer: {       //unnecessary?  update upon save event?
    type: Boolean,
    default: false
  },
//   organizer: [organizerSchema],  redundant?
},
{
  timestamps: true
})

const User = mongoose.model('users', userSchema) //change for consistency of collection names
export default User