const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('./routes/user.js');
const app = express();
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to mongoDB');
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!');
});

//middlewares

app.use(cors());

app.use(express.json());

app.use('/api/user', Routes);

app.listen(8000, () => {
    connect();
    console.log('Connected to backend.');
});
