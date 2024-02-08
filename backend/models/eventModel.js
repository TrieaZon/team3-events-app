import mongoose from 'mongoose'

//see tagSchema
const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
//https://www.npmjs.com/package/mongoose-slug-generator
//https://medium.com/fbdevclagos/how-to-create-unique-urls-in-an-expressjs-and-mongodb-app-78865802902e


//category  
const categorySchema = mongoose.Schema({
  name: {
    type: String,
  }
},
  {
    timestamps: true
})


//tag
const tagSchema = mongoose.Schema({ 
  name: {
    type: String,
  },
  slug: {   //double check this works
    type: String,
    slug: "name"
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
    default: False    
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
  // like: [likeSchema],
  numLikes: {      //counter update upon like button...
    type: Number,     //needed?
    default: 0
  },
  // attendee: {     
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users'
  // },
  // organizer: {
  //   type: mongoose.Schema.Types.ObjectId, 
  //   ref: 'organizers',
  //   required: true
  // },
  category: [categorySchema],
  tags: [tagSchema],  
},
  {
  timestamps: true,
})




const Event = mongoose.model('events', eventSchema)

export default Event 