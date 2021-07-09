import React ,{useState , useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Login from  './Login'
import Axios from 'axios'
const useStyle = makeStyles((theme)=>({
    TextFeild:{
        margin: theme.spacing(2),
        width: '30ch', 
    },
    ButtonStyle:{
        width: '28ch',
    },
}));

const Register = () => {
    const classes = useStyle();
    const [ showlog , setShowlog] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setconPassword] = useState('');
    const card = {
        /* Center vertically and horizontally */
        boxShadow: '2px 4px 10px 4px black',
        width:'28%',
        display:'block',
        margin:'auto',
        marginTop:'5%'
    }
   const TitleMod = {
       fontSize:'20px',
       backGround:'blue'
   }

   const submitForm =()=>{
    setShowlog(true)
       Axios.post("http://localhost:3001/api/insert",
       {
        name:name,
        email:email,
        contact:contact,
        password:password,
        conPassword:conPassword
    }).then((response)=>{
        // if(response.data.message){
        //     alert(response.data.message)
        // }else{
            
        //     alert('inserted');
        // }
    
    })
   }
   const handleClick = ()=>{
       setShowlog(true)
   }
    return (
        <div>
        {
            showlog ===false ?
            <div style={card}>
            <CardHeader
               avatar={
                <IconButton>
                     < PersonOutlineIcon/>
                </IconButton>
               }
               style={TitleMod}
                title={<h2>Register</h2>}
            />
            <CardContent  className="classes.FormControl" >
                <FormControl autocomplete="on">
                    <TextField  
                        label="UserName" 
                        variant="filled"  
                        type="text"
                        color="success" 
                        className={classes.TextFeild}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <TextField  
                        label="email" 
                        variant="filled"  
                        type="email"
                        color="success" 
                        className={classes.TextFeild}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <TextField  
                        label="Contact no" 
                        variant="filled"  
                        type="tel"
                        color="success" 
                        className={classes.TextFeild}
                        onChange={(e)=>{setContact(e.target.value)}}
                    />
                    <TextField  
                        label="Password" 
                        variant="filled"  
                        type="password"
                        color="success" 
                        className={classes.TextFeild}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <TextField  
                        label="Confrim Password" 
                        variant="filled"  
                        type="password" 
                        className={classes.TextFeild}
                        onChange={(e)=>{setconPassword(e.target.value)}}
                    />
                   
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.TextFeild}
                        onClick = {submitForm}
                        >
                            REGISTER
                    </Button>
                    
                    
                </FormControl>
            </CardContent>
            <CardActions>
                <Typography style={{paddingLeft:'50px'}}>
                    Alreday an User?
                <span onClick={handleClick} style={{fontSize:'16px',padding:'8px' ,color:'blue',cursor:'pointer' }}>
                    Login
                </span>
                </Typography>
            </CardActions>
        </div>
        :
        <Login />

        }
      </div> 
    )
}

export default Register
