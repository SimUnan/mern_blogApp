const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

const connectDB = require('./db/connectDB');
const allRoutes =require('./routes/index.js')


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 8000;

//setup Routes
app.use('/api', allRoutes)


app.listen(PORT,() => {
    connectDB();
    console.log(`server running on PORT: ${PORT}`);
})