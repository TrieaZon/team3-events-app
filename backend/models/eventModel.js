import mongoose from 'mongoose'


//category   ? predefined checklist...
const categorySchema = mongoose.Schema({
  name: {
    type: String,
  }
},
  {
    timestamps: true
})

const tagSchema = mongoose.Schema({ 
  name: {
    type: String,
  }
},
  {
    timestamps: true
})



//event
const eventSchema = mongoose.Schema({
  name: {
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
    //https://mongoosejs.com/docs/schematypes.html#type-key
    //type placeholder String
    //maybe date 
    //how do we specify in form e.g. Date-time?
    //how does it get stored in db?      
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocaletimestring
  },
  endTime: {
    type: String,
    required: true
  },
  locationRemote: {    //button toggle?
    type: Boolean,
    default: False   //default in person !=online
  },
  venue: {           //if locationRemote true, populate following for venue location?
    type: String,
  },
  address: {        //if online, n/a
    type: String,
  },
  city: {          
    type: String,
  },
  state: {        //country dependent
    type: String,
  },
  zipcode: {      // country dependent; to start assuming 5 digits 
    type: Number,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  costYes: {          //button toggle?  
    type: Boolean,
    default: False    //
  },
  minCost: {
    type: Number,      //float?, if costYes true, populate following for cost?
  },
  maxCost: {
    type: Number,
  },
  countTickets: {
    type: Number,
  },
  numLikes: {      //counter update upon like button...
    type: Number,     //likeSchema?
    default: 0
  },
  attendee: {     //not sure where we should store this...on ticketModel?
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users',
    required: true
  },
  category: [categorySchema],
  tags: [tagSchema],  
},
  {
  timestamps: true,
})




const Event = mongoose.model('events', eventSchema)

export default Event 