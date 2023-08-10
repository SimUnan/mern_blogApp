const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const connectDB = require('./db/connectDB');
const allRoutes =require('./routes/index.js')


const app = express()
const PORT = 9000;

app.use(express.json())
app.use(cors(
    {origin: ["http://localhost:5173"], 
    credentials: true
}));
app.use(cookieParser())
dotenv.config()


//setup Routes
app.use('/api', allRoutes)


connectDB();
app.listen(PORT,() => {
    console.log(`server running on PORT: ${PORT}`);
})

