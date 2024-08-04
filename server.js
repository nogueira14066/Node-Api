//create node.js application
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoutes')
const errorMiddleware = require('./errorMiddleware/errorMiddleware')
const cors = require('cors')

//.env
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND


var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products', productRoute)


//declare routes so i can use access the website in the browser
//routes --------> .get means "get route"
//req=request -> client sends a request
//res=response -> the response is what the node app responds back to the client
app.get('/', (req, res) => {    
    res.send('Hello NODE API')
}) 
app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})


app.use(errorMiddleware);

//collection name = Node-API, but it can be any name
mongoose.connect(MONGO_URL)
.then(() => {
    console.log('connected to mongodb');
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`);
    });
    
}).catch((error) => {
    console.log(error);
})

