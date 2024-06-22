import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String , 
    req:true
  },
  email:{
    type:String,
    req:true, 
    unique:true,
  },
  password:{
    type:String,
    req:true,
  },
  cartData:{
    type:Object,
    default:{},
  }
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user" , userSchema);

export default userModel;