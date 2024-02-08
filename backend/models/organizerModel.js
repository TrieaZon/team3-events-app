import mongoose from "mongoose";


const organizerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',   //reference to collection name
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events',
    require,d: true
  },
  numFollowers: {
    type: Number,
    default: 0
  },
},
{
timestamps: true, 
})


const Organizer = mongoose.model('organizers', organizerSchema)

export default Organizer