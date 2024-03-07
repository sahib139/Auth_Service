const express=require("express");
const bodyParser=require("body-parser");
const app=express();

const {PORT}=require("./config/server_config");


const setUpAndStartServer=async ()=>{

    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT,async ()=>{
        console.log(`Server started at port no. ${PORT}`);
    })
}

setUpAndStartServer();