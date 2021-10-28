const mongoose=require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Express_Validation').then(() => {
        console.log('Successfully connected to mongoDB');
    })
}

module.exports=connect