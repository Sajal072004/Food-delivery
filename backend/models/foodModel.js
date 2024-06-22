import mongoose, { mongo } from "mongoose";

const foodSchema = new mongoose.Schema({

  name: {
    type:String, 
    req:true,
  },

  description: {
    type: String,
    req:true,
  },

  price : {
    type: Number,
    req:true,
  },

  image:{
    type:String,
    req:true,
  },

  category : {
    type: String,
    req:true,
  }



})

const foodModel = mongoose.models.food || mongoose.model("food" , foodSchema);

export default foodModel;