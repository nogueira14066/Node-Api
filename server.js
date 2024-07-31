//create node.js application
const express = require('express')
const app = express()

//declare routes so i can use access the website in the browser
//routes --------> .get means "get route"
//req=request -> client sends a request
//res=response -> the response is what the node app responds back to the client
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000');
})