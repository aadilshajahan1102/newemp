const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://aadilshajahan123:aadil2003@cluster0.eyg53np.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
