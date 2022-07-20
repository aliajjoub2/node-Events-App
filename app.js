const express = require("express")
const app = express()
// bring ejs template

app.set('view engine', 'ejs')

//bring static

app.use(express.static('public'))
app.use(express.static('node_modules'))

// connect MongoDB
 
const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://ali-ajjoub:ali.node1984@cluster0.pxc5n.mongodb.net/?retryWrites=true&w=majority")
  .then( result => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  })
  .catch( err => {
    console.log(err);
  }); 

  
app.get('/', (req,res)=> {

    res.send(" it is working from web")
})

// bringg events routes

const events = require('./routes/event-routes')
app.use('/events', events)

// listen to port 3000

app.listen(3000, ()=> {

    console.log(' app is wokring on port 3000')
})