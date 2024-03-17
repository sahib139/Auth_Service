const express=require("express");
const bodyParser=require("body-parser");
const app=express();

const {PORT,DB_SYNC}=require("./config/server_config");
const db = require("./models/index");
const Apiroutes=require("./routers/index");

const setUpAndStartServer=async ()=>{

    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',Apiroutes);
    app.use('/authService/api',Apiroutes);

    if(DB_SYNC == true){
        await db.sequelize.sync({alter:true});
    }

    app.listen(PORT,async ()=>{

        console.log(`Server started at port no. ${PORT}`);
        
    })
}

setUpAndStartServer();