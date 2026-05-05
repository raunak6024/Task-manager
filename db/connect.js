const mongoose=require('mongoose')
const connectionString ='mongodb+srv://raunak_6024:%40pass_5271@nodeexpressprojects.4hevrjx.mongodb.net/TaskManager?appName=NodeExpressProjects'
  
const connectDB=(url)=>{
 return mongoose.connect(connectionString).then(()=>console.log('connected to the data base sucessfully:')).catch((err)=>console.log(err))
}

module.exports= connectDB