const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/?directConnection=true"

const connectToMongo= async()=>{
    mongoose.connect(mongoURI)
    await console.log("Connected to MongoDB successfully!")
}
module.exports=connectToMongo;