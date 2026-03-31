const express= require('express')
const app=express()

const tasks =require('./router/route')

app.get("/hello",(req,res)=>{
    res.send("Hello user how are you doing")
})
// midllewares
app.use(express.json())
//router setup
app.use('/api/v1/tasks',tasks)

const port =3000
app.listen(port,console.log(`server is listining on the port${port}`))
