if (typeof window !== 'undefined') {
    let tg = window.Telegram.WebApp;
    document.getElementById("user_name").value = tg.initDataUnsafe.user.id;
}    

const query = ` 
SELECT * 
FROM users 
`; 

require('dotenv').config();
process.env.DATABASE_URL

import pkg from 'pg';
const { Client } = pkg;

// import { Client } from 'pg';
let conString = process.env.DATABASE_URL;
let client = new Client(conString);
client.connect();

client.query(query, (err, res) => { 
    if (err) { 
    console.error(err); 
    return; 
    } 
    for (let row of res.rows) { 
    console.log(row); 
    } 
    client.end(); 
    }); 