import express from "express";
import cors from "cors";
import { Schema } from "mongoose";
import { connect ,usersModel,housesModel} from "./database/mongoose.js";
import jwt from "jsonwebtoken"
import authenticate from "./authenticate.js";

import dotenv from "dotenv";
dotenv.config();
const { DB_CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());
app.options('*', cors());

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

connect(DB_CONNECTION_STRING)


app.get("/home", async (req, res) => {
  const houses = await housesModel.find();
    res.json(houses);
})



app.post("/signup", async (req, res) => {
    try {
      const user = new usersModel(req.body);
      const result = await user.save();
      const token = jwt.sign({ _id: result._id }, "123", {
        expiresIn: 3600,
      });
      return res.json({
        token,
        isSeller: result.isSeller,
        name: result.firstname
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


app.post("/login",async (req,res)=>{
  try {
    const {mail,password}= req.body;
    const user = await usersModel.findOne({ mail });
    if (!user || user.password !== password){
      return res.json({message:"wrong cred"})
    }
    const token = jwt.sign({ _id: user._id }, "123", {
      expiresIn: 3600,
    });
    return res.json({
      token,
      isSeller: user.isSeller,
      name: user.firstname
    })
  } catch (error) {
    return res.json({error})
  }
})

app.post("/add-property",authenticate,async (req,res)=>{
  let property = new housesModel(req.body);
  let result = await property.save();
  return res.json(result)
})

// Add this endpoint to your existing backend code
app.get("/user-details", async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, "123");
  const user = await usersModel.findById(decoded._id, 'firstname mail');
  return res.json(user);
});


// app.get("/get-property", async (req,res)=>{
//   console.log("req");
//   const propertyId = "6651d2dae8c95d543f222b45"
//   const property = await housesModel.find({id:propertyId})
//   console.log(property);
//   return res.json(property)
// })

app.get("/get-my-property",async(req,res)=>{
  const ownerId = req.user._id;
  const userProperty = await housesModel.find({ownerId:ownerId})
  console.log(userProperty);
  return res.json(userProperty)
})

app.post("/get-property", async (req,res)=>{
  const property_id=req.body
  const property=await housesModel.find(property_id)
  return res.json(property)
  console.log(property)
  
})

app.post("/update-property",async(req,res)=>{
  const updatedproperty = req.body.property
  await housesModel.updateOne({_id:req.body.propertyId},updatedproperty)
  return res.send({
    message:"success"
  })
})

app.post("/get-filter",async (req,res)=>{
  const {location,bhk ,rent} = req.body
  const properties = await housesModel.find({location: location, rent:rent,
  bhk: bhk
})
})


app.post("/delete-property",async(req,res)=>{
  const deleteproperty = req.body
  await housesModel.deleteOne({_id:req.body.propertyId},deleteproperty)
  return res.send({
    message:"success"
  })
})


app.get("/im-interested", async(req,res)=>{
  const propertyId = req.body
  console.log(propertyId)
  const result = await housesModel.findById({propertyId})
  return res.json(res)
})

app.listen(8000,console.log("server up"))