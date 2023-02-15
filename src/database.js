const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mern-task';


mongoose.connect(URI)
    .then(db=>console.log('Conect to MongoDB')) 
    .catch(err=>console.log(err));

module.exports = mongoose;