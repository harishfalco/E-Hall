 const { getDefaultNormalizer } = require('@testing-library/dom');
const express =  require('express')
 const app = express()
 const mysql = require('mysql')
 const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

app.use(express.static('../public/img/'))
 const db = mysql.createPool({
     host:'localhost',
     user:'root',
     password:'',
     database:'hallmanagement'
 });
 app.use(cors());
 app.use(express.json())
 app.use(bodyParser.urlencoded({extend:true}))
 
  const upload = multer();
 app.post('/api/insert',(req,res)=>{

    const name = req.body.name
    const email = req.body.email
    const contact = req.body.contact
    const password = req.body.password
    const conPassword = req.body.conPassword
    if(password === conPassword){
        const sqlInsert = "INSERT INTO register (name , email,number,password,con_password) VALUES (?,?,?,?,?);"
        db.query(sqlInsert,[name,email,contact,password,conPassword],(err,result)=>{
            console.log(err);
        })
    }
    else{
        res.send({message:'passwords dont match'})
    }
 })

 var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, '../public/img/');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });

 app.post('/posthall', multer({ storage: storage }).single("image"),(req,res)=>{
    // console.log(req.body,req.file)
    const hallName = req.body.hallName
    const ownerName = req.body.ownerName
    const email = req.body.email
    const district = req.body.district
    const state = req.body.state
    const charge = req.body.charge
    const description = req.body.description
    const image = req.file.path
    // console.log(image)
    

const sqlInsert = "INSERT INTO post_hall (hallname , ownername, email,district,state,charge,description,image) VALUES (?,?,?,?,?,?,?,?);"
        db.query(sqlInsert,[hallName,ownerName,email,district,state,charge,description,image],(err,result)=>{
            if(err){
                res.send({err:err})
                console.log(err);
           }
            if(result){
               res.send({message:'inserted'})
             }
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

 app.post('/book',(req,res)=>{
    
    const name = req.body.name
    const email = req.body.email
    const contact = req.body.contact
    const fromDate = req.body.fromDate
    const toDate = req.body.toDate
    const card = '000'
   
     const sqlInsert = "INSERT INTO payment (name,email,conatct	,fromDate,toDate,card) VALUES (?,?,?,?,?)";
     db.query(sqlInsert,[name,email,contact,fromDate,toDate,card],
        (err,result)=>{
        if(err){
            res.send({err:err})
        }

    //     if(result.length > 0){
    //             res.send(result)
    //         }
    //         else{
    //             res.send({message:'Wrong username or password configuration'})
    //         } 
      })
     console.log("till this");
 })

 app.post('/api/contact',(req,res)=>{
     const name = req.body.name
     const email = req.body.email
     const contact = req.body.contact
     const message = req.body.message
    if(contact.length== 11){
        const sqlInsert = 'INSERT INTO contact_owner (name,email,contact_no,message) VALUES(?,?,?,?);'
        db.query(sqlInsert,
           [name,email,contact,message],
           (err,result)=>{
               if(err){
                   res.send({err:err})
               }
               else{
                   res.send({message:'message sent to owner'})
               }
        })
    }
    else{
        res.send({message:'invalid conatct number'}) 
    }
     
 })





 app.listen(3001,()=>{
     console.log("running");
 })