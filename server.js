const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0.rdq0o.mongodb.net/todo_mongoose_react?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('database connected:', url);
});

db.on('error', err => {
    console.error('connection error:', err);
})

app.listen(3000, function() {
    console.log('listening on port 3000');
});