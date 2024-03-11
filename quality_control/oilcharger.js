const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = '3001';

const db_qc = mysql.createConnection({
    user: "root",
    host: "10.35.10.78",
    password: "78mes@haier",
    database: "quality_control"
})

const db_mes = mysql.createConnection({
    user: "root",
    host: "10.35.10.78",
    password: "78mes@haier",
    database: "cosmo_im_9771"
})

app.get('/mes9771', (req, res) => {
    db_mes.query("SELECT * FROM bns_pm_operation", (err, result) => {
        console.log(req.query)
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/oilchargera', (req, res) => {  
    db_qc.query("SELECT * FROM oilcharger_a", (err, result) => {
        console.log(req.query)
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.get('/oilchargerb', (req, res) => {
    db_qc.query("SELECT * FROM oilcharger_b", (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

app.listen(port, () => {
    console.log('Server is running on port 3001')
})