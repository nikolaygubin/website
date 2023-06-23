require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const request = require('request')

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
        const [result, other] = await sequelize.query(query)
        console.log(result)
        for (let user of result) {
            // console.log(user['photo'])
            let url = `https://api.telegram.org/bot${process.env.TOKEN}/getFile?file_id=${user['photo']}`
            let photo = `https://api.telegram.org/file/bot${process.env.TOKEN}/<file_path from the JSON>`
            request({
                url: url,
                json: true
              }, function(error, response, body) {
                let photo = `https://api.telegram.org/file/bot${process.env.TOKEN}/${body['result']['file_path']}`
                console.log(photo)
                // console.log(body);
              });
            // console.log(url)
        }
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