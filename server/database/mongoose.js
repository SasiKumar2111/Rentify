import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const { DB_CONNECTION_STRING } = process.env;

const housesSchema = new Schema({
  ownerId: ObjectId,
  propertyName: String,
  location: String,
  bhk: Number,
  bathroom: Number,
  school: Number,
  college: Number,
  hospital: Number,
  sqfeet: Number,
  rent:Number,
  image: String
});
const housesModel = mongoose.model("houses", housesSchema);

const usersSchema = new Schema({
  firstname: String,
  lastname: String,
  mail: String,
  phone:Number,
  password: String,
  isSeller:Boolean
});
const usersModel = mongoose.model("users", usersSchema);


const connect= ()=>{
    mongoose.connect("mongodb://localhost:27017/rentify");
}

export {housesModel,usersModel,connect}