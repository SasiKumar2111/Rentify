
function Test() {
  const [image,setImage] = useState(null)
  const [allImage,setAllImage]= useState(null)
  const submitImage= async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image",image)

    const result = await axios.post("http://localhost:8006/upload-image",formData,{header:
    {"Content-Type" : "multipart/form-data"}
  });
  }
  const getImage = async()=>{
    const result = await axios.get("http://localhost:8006/get-image");
    setAllImage(result.data.data)
  }
  useEffect(()=>{
    getImage()
  },[])
  return <div>
    <form onSubmit={submitImage}>
    <input type="file" id="myFile" accept="image/*" onChange={(e) =>setFile(e.target.files[0])}
    <button type="submit"></button>
    </form>
  </div>;
}

export default Test;





import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import {v4 as uuidv4} from "uuid"
import { Schema } from "mongoose"
import housesmodel from "./mongo";


const app = express()
app.use(express.json())
app.options('*',cors());
const allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);

mongoose.connect("mongodb://localhost:27017/rentify");
const housesSchema=new Schema({
    id: Number,
    name:String,
    mail:String,
    location: String,
    bhk: String,
    availability: String,
    rent: Number,
    sqfeet: Number,
    image: String
})
const housesmodel = mongoose.model("houses",housesSchema);
/////////////////////////////////////////////////////////   LOGIN SESSIONS   ///////////////////////////////////////////////////////////////////

uuidv4()

// app.post("/login",async (req,res)=>{
//   housesmodel.map(housesModel, ()=>{

//   })
// })


// Usage
// fetchHouseById(50).then(image => {
//   console.log(image);
// }).catch(err => {
//   console.error("Error fetching image:", err);
// });


// Function to retrieve image data by id
async function getImageById(id) {
    try {
        // Connect to the MongoDB database
        await mongoose.connect('mongodb://localhost:27017/rentify');

        // Find the house by id
        const house = await housesModel.findById(id).exec();

        if (house) {
            // Return the image data
            return house.image;
        } else {
            throw new Error('House not found');
        }
    } catch (error) {
        console.error('Error retrieving image data:', error);
        throw error;
    } finally {
        // Close the connection
        await mongoose.disconnect();
    }
}

// Example usage
getImageById(1)
    .then(imageData => console.log('Image data:', imageData))
    .catch(error => console.error('Error:', error));



//////////////////////////////////////////////////////////   HOUSE ADS FEED SECTION   //////////////////////////////////////////////////////////

app.get("/" ,(req,res,next)=>{
  res.send("hello");
  next();
})

app.get("/d" ,(req,res,next)=>{
  res.send("hello");
  next();
})


app.get("/home",async (req,res)=>{
    const housesModel =  await housesmodel.find()
    res.json(housesModel);
})


//////////////////////////////////////////////////////   IMAGE UPLOAD SECTION    /////////////////////////////////////////////////////////////

// // Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null,(file.fieldname +"-" +Date.now()+ file.originalname))
  }
})

const upload = multer({ storage: storage })

const imagesSchema = new Schema({
  image: String
})
const imagesmodel = mongoose.model("images",imagesSchema);

app.use(express.static("public"))

app.post('/upload',upload.single("file"), async (req,res,next)=>{
  await housesmodel.create({image: req.file.filename})
  .then(result=> res.json(result))
  .catch(err=> console.log(err))
  next();
})

app.get("/getImage",async (req,res) => {
  await housesmodel.find()
  .then(houses =>res.json(houses))
  .catch(err => res.json(err))
})


/////////////////////////////////////////////////////////   POSTING ADS   ///////////////////////////////////////////////////////////////////


app.post("/postads",async(req,res)=>{
  let houseModel = new housesmodel(req.body)
  let result = await houseModel.save()
  res.send(result)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




app.listen(8006,()=> console.log("server up"))
