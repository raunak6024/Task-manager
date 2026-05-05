
const express= require('express')
const app=express()
const connectDB =require('./db/connect')
const tasks =require('./router/route')

app.get("/hello",(req,res)=>{ // basic route for testing 
    res.send("Hello user how are you doing")
})

app.use(express.json())// midllewaresS
app.use('/api/v1/tasks',tasks)//router setup 
const port =3000

const start =async ()=>{
    try{
        await connectDB()
        app.listen(port,console.log(`server is listining on the port${port}`))

    } catch(error){
       console.log(error)
    }
}
 start()