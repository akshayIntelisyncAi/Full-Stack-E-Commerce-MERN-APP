const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://akshayteli111:teli@cluster0.gitmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB