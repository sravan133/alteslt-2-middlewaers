const express=require("express")

const app=express()

app.use((req,res,next)=>{            // MIDDLE WAER
    console.log("sravan")
    console.log("pinku")
    console.log("deepu")
    next()

})

app.use((req,res,next)=>{           // MIDDLE WEAR
    console.log("Haritha")
    next()
})

app.use("/user",(req,res,next)=>{
    res.send({key1:'value1'})           // MIDDLE WEAR  using routes

})
app.use("/",(req,res,next)=>{
    res.send("welcome to home page")   // MIDDLE WEAR 2 using routes
})
app.listen(7000,()=>{
    console.log("server is running at port 7000!")

})