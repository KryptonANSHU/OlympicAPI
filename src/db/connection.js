const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Olympics',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to database')
}).catch((e)=>{
    console.log(e)
})

