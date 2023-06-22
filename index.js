require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

// app.get('/',  (req, res) => {
    //     res.status(200).json({message: 'WORKING!!!'})
// })
const query = ` 
SELECT * 
FROM users
`; 

const start = async () => {
    try {
        await sequelize.authenticate()
        result = await sequelize.query(query, (err, res) => { 
                if (err) { 
                console.error(err); 
                return; 
                } 
                for (let row of res.rows) { 
                console.log(row); 
                } 
                });
        console.log(result)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()


// let tg = window.Telegram.WebApp;
// document.getElementById("user_name").value = tg.initDataUnsafe.user.id;


// require('dotenv').config();
// process.env.DATABASE_URL

// import pkg from 'pg';
// const { Client } = pkg;

// // import { Client } from 'pg';
// let conString = process.env.DATABASE_URL;
// let client = new Client(conString);
// client.connect();

// client.query(query, (err, res) => { 
//     if (err) { 
//     console.error(err); 
//     return; 
//     } 
//     for (let row of res.rows) { 
//     console.log(row); 
//     } 
//     client.end(); 
//     }); 