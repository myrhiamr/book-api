const mongoose = require('mongoose');
require('dotenv').config();
const { performance } = require("perf_hooks");
const Book = require('../models/book');

async function main() {
    const start = performance.now();
    console.log('start');

    let dbConnection;
    try {
        dbConnection = await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected');
    } catch (error) {
        console.log('error connecting to database', error);
    }
}

// this is just a change to test commits

main();
