const mongoose =require('mongoose');

async function connectDB() {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected Succesfully")
  }
  catch(error){
    console.log('DataBase connection error',error)
  }
  
}
module.exports=connectDB
