const express= require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {coursemodel} = require("./models/course")

const app= express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anna:anna@cluster0.ld2gi.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/",(req,res)=>{
    let input=req.body
    let course=new coursemodel(input)
    course.save()
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
}
    
)

app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
  
})

app.listen(8085,()=>{
    console.log("server started")
})