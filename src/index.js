const express=require("express")
const bodyParser=require("body-parser")
const serverConfig=require('./config/serverConfig')
const connectDB=require("./config/dbConfig")
const app=express();

console.log("it is working")
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))

console.log("it is working")
app.post('/ping',(req,res)=>{
    console.log(req.body)
    return res.json({message:'ping'})
})


console.log("it is working")

app.listen(serverConfig.PORT,async()=>{
    console.log("it is working")
    //await connectDB();
    console.log(`server started at ${serverConfig.PORT}......`)
})
//ZqZbLRwZEoQMv3Pn   subhashkumarr1612