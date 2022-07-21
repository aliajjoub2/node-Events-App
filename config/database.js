const mongoose= require('mongoose')

// connect MongoDB
// add port



mongoose.connect("mongodb+srv://ali-ajjoub:ali.node1984@cluster0.pxc5n.mongodb.net/?retryWrites=true&w=majority")
.then( result => {
    
    console.log('connect to database')
   
  })
  .catch( err => {
    console.log(err);
  });