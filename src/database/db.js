const mongoose = require("mongoose");


async function connecteddb  () {
   try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Server Conneted with Mongodb");
        
   }    
   catch(err){
    console.log(err.message)
   }
}

module.exports = connecteddb

