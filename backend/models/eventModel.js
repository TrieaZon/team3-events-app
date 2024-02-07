import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  headline: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: [String],
    required: true
  },
  tags: {
    type: [String],
    required: false
  },
  description: {
    type: String,
    reqiured: true
  },
  minCost:{
    type: Number,
    required: true,
    default: 0
  },
  numLikes: {
    type: Number,
    required: true,
    default: 0
  },
  ticketNum: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

const Event = mongoose.model('events', eventSchema)
export default Event