const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const ExerciseRouter=require('./Routes/Exercise');
const UsersRouter=require('./Routes/Users')
const app=express();
const port=5001;


console.log("welcome posteen");


app.use(express.json());
 app.use(cors());
 //calling user and Exercice components
//  app.use(bodyParser.urlencoded({ extended: true }));
 app.use('/exercise',ExerciseRouter);
app.use('/Users',UsersRouter);
//connecting with port
app.listen(port,()=> console.log(`server is running at:${port}`));
// const url=process.env.ATLAS_URL;


// const connection=mongoose.connection;
// mongoose.connect();
// connection.once('open',()=>{
//     console.log(`connection successfully`)
// });

const connection=mongoose.connection;
mongoose.connect('mongodb://localhost:27017');
connection.once(`open`,()=>{
    console.log("connection is successfully")
})



 



