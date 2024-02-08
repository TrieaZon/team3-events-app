import mongoose from "mongoose";

//collection of its own would be difficult to read...? eg. userid: 1234, event id: 1232
//should this be located under event model?
//how would you get likes for specific user   vs. specific event?

const likeSchema = mongoose.Schema({   
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',   
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events',
    required: true
  }
})


const Like = mongoose.model('likes', likeSchema)

export default Like 