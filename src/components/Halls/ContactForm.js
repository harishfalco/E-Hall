import React ,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Axios from 'axios'
const useStyle = makeStyles((theme)=>({
    TextFeild:{
        margin: theme.spacing(2),
        width: '50ch', 
    },
    TextArea:{
        margin: theme.spacing(2),
        width: '50ch', 
        height:'80ch',
        padding:"10px",
        fontFamily:'arial'
    },
    ButtonStyle:{
        width: '20ch',
        marginLeft:'17ch'
    },
}));


const ContactForm = () =>{
    
    const classes = useStyle();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = () =>{
        // console.log("till this");
        Axios.post("http://localhost:3001/api/contact",
        {
         name:name,
         email:email,
         contact:contact,
         message:message
     }).then((response)=>{
         if(response.data.message){
             alert(response.data.message)
         }
         setName(' ');
         setEmail(' ');
         setContact(' ');
         setMessage(' ');
     })

    }
    return(
      <>
     
       <h3 style={{}}>Have a query , leave a message here</h3> 
         <FormControl autocomplete="on">
                    <TextField  
                        label="Name" 
                        value={name}
                        variant="outlined"  
                        type="text"
                        color="success" 
                        className={classes.TextFeild}
                        onChange = {(e)=>{setName(e.target.value)}}
                    />
                    <TextField  
                        label="email" 
                        value={email}
                        variant="outlined"  
                        type="email"
                        color="success" 
                        className={classes.TextFeild}
                        onChange = {(e)=>{setEmail(e.target.value)}}
                    />
                    <TextField  
                        label="Contact no"
                        value={contact} 
                        variant="outlined"  
                        type="tel"
                        color="success" 
                        className={classes.TextFeild}
                        onChange = {(e)=>{setContact(e.target.value)}}
                    />
                    {/* <TextField  
                        label="Textarea" 
                        variant="filled"  
                        type="text"
                        color="success" 
                        className={classes.TextArea}
                    /> */}
                    <TextareaAutosize
                      label="Message"
                      value={message}
                      rowsMin={8}
                      className={classes.TextArea}
                      onChange = {(e)=>{setMessage(e.target.value)}}
                      />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.ButtonStyle}
                        onClick = {handleClick}
                        >
                           SUBMIT QUERY

                    </Button>
                </FormControl>
      </>
    );
}
export default ContactForm