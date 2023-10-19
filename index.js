const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||5000



app.use(express.json());

const blog=require("./routes/blog")

app.use("/api/v1",blog);


const connnectWithdb=require("./config/database");
connnectWithdb();


app.listen(PORT,()=>
{
    console.log("app runnig on port")
})

app.get("/",(req,res)=>{
    res.send('<h1> this is my homepage baby</h1>')
})

