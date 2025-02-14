const mongoose=require('mongoose');

const conn = async()=>{
    try{
        await mongoose.connect("mongodb+srv://abcdefgh:abcdefgh@cluster0.c1k6l.mongodb.net/bookstore3");
        console.log("Connected to database");
    }catch(err){
            console.log(err);
        }
}
conn();
