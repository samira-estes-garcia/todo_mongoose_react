const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const url = 'mongodb+srv://admin:admin@cluster0.rdq0o.mongodb.net/todo_mongoose_react?retryWrites=true&w=majority';

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-typ: application/json
app.use(express.json());

//parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded( { extended: true }));

//get route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to To Do App"});
})

//set port and listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });

// const db = mongoose.connection
// db.once('open', _ => {
//     console.log('database connected:', url);
// });

// db.on('error', err => {
//     console.error('connection error:', err);
// })
