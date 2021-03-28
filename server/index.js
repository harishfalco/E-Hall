 const { getDefaultNormalizer } = require('@testing-library/dom');
const express =  require('express')
 const app = express()
 const mysql = require('mysql')
 const bodyParser = require('body-parser')
const cors = require('cors')

 const db = mysql.createPool({
     host:'localhost',
     user:'root',
     password:'',
     database:'hallmanagement'
 });
app.use(cors());
app.use(express.json())
 app.use(bodyParser.urlencoded({extend:true}))

 app.post('/api/insert',(req,res)=>{

    const name = req.body.name
    const email = req.body.email
    const contact = req.body.contact
    const password = req.body.password
    const conPassword = req.body.conPassword

     const sqlInsert = "INSERT INTO register (name , email,number,password,con_password) VALUES (?,?,?,?,?);"
     db.query(sqlInsert,[name,email,contact,password,conPassword],(err,result)=>{
         console.log(err);
     })
 })

// app.get('/',(req,res)=>{
//     const sqlInsert = "INSERT INTO register (name , email,number,password,con_password) VALUES ('harishk','harish@gmail.com',9842766806,'12345','12345');"
//     db.query(sqlInsert ,(err,result)=>{
//         res.send("hello world")
//     })

// });
app.post('/login',(req,res)=>{

    const name = req.body.name
    const password = req.body.password

     const sqlInsert = "SELECT * FROM register WHERE name = ? AND password=?;"
     db.query(sqlInsert,[name,password],
        (err,result)=>{
        if(err){
            res.send({err:err})
        }
    
            if(result.length > 0){
                res.send(result)
            }
            else{
                res.send({message:'Wrong username or password configuration'})
            }
    
        
     })
 })





 app.listen(3001,()=>{
     console.log("running");
 })