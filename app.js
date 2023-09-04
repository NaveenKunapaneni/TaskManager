const express = require('express')
const app = express();
const port = 3000
const tasks = require('./routes/tasks.js');
const connectDb = require('./db/connect.js');
const cors = require('cors');
require('dotenv').config()


//middleware
app.use(express.json())
app.use(express.static('./public'));
app.use(cors());



//routes
app.use('/api/v1/tasks', tasks);


const start = async () => {
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on ${port}...`))
    }
    catch (error) {
        console.log(error);
    }
}

start()