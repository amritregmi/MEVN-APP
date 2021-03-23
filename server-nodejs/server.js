const mongoose = require('mongoose')

const app = require('./app')


// DB DETAILS 
const DB = 'mongodb+srv://amrit:amrit@cluster0.et9tw.mongodb.net/vuedb?retryWrites=true&w=majority'

// connect with remote mongodb-atlas
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(conn => {
    console.log('connected to database');
}).catch(err => {
    console.log(err);
})

const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`nodejs server running on http://localhost:${PORT}`);
})

module.exports = server