
const express= require('express')
const app=express()
const connectDB =require('./db/connect')
const tasks =require('./router/route')
require('dotenv').config()
app.use(express.static('./public')) // middleware to serve the static files 

app.use(express.json())// midllewaresS
app.use('/api/v1/tasks',tasks)//router setup 
const port =3000
 
const start =async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listining on the port${port}`))

    } catch(error){
       console.log(error)
    }
}
 start()