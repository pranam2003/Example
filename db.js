 const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hotels', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db=mongoose.connection;
db.on('connected', () => {
    console.log('Mongoose connected to DB');
});
//  setTimeout(() => {
//         mongoose.disconnect();
//     }, 3000);
db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports=db;
