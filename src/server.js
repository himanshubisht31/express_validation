const express=require('express')
const connect=require('./config/db')
const app = express()

const userController=require('./controller/userController')

app.use(express.json())

app.use('/users', userController)

app.listen(2345, async() => {
    await connect()
    console.log('Listening on port 2345');
})