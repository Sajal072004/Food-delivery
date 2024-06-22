import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://sajalnamdeo627:I31QHcCrKs19Drl1@cluster0.5cm62ps.mongodb.net/Food-Delivery")
  .then ( ()=> console.log("DB connected"))
}