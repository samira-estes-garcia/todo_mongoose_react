const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = '';

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('database connected:', url);
});

db.on('error', err => {
    console.error('connection error:', err);
})