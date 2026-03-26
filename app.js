const express= require('express')
const app=express()


app.get("/hello",(req,res)=>{
    res.send("Hello user how are you doing")
})


const port =3000
app.listen(port,console.log(`server is listining on the port${port}`))
