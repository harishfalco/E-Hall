import React ,{useState , useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Register from './Register'
// import {Context} from '../Context'
// const useStyle = makeStyles(
//     {
        
//     }
// )

const useStyle = makeStyles((theme)=>({
    FormControl:{
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         background:'orange'
    },
    TextFeild:{
        margin: theme.spacing(2),
        // marginRight: theme.spacing(1),
        width: '25ch',
        
    },
    ButtonStyle:{
        width: '25ch',
    }
}));
const Login = (props) => {
    const classes = useStyle();

    const card = {
        /* Center vertically and horizontally */
        boxShadow: '2px 4px 10px 4px black',
        width:'20%',
        display:'block',
        margin:'auto',
        marginTop:'10%'
    }
       
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [loginstatus, setloginstatus] = useState('');
    const [showreg, setShowreg] = useState(false);
    const login =()=>{
        Axios.post("http://localhost:3001/login",
        {
         name:name,
         password:password,
     }).then((response)=>{
         if(response.data.message){
             alert(response.data.message)
         }
         else{
            setloginstatus(response.data[0].name)
            props.setIsloggedin(false);
         }
     })
    }
    const handleSubmit = (e)=>{
         setShowreg(true)
    }
    return (
        <div>
        {
            showreg === false ?

            <div style={card}>
            <CardHeader
               avatar={
                <IconButton>
                     < VpnKeySharpIcon/>
                </IconButton>
               }
                title="Login to continue"
            />
            <CardContent  className="classes.FormControl" >
                <FormControl >
                    <TextField  
                        label="UserName" 
                        variant="filled"  
                        type="text"
                        color="success" 
                        className={classes.TextFeild}
                         onChange = {(e)=>{setName(e.target.value)}}
                    />
                    <TextField  
                        label="Password" 
                        variant="filled"  
                        type="password" 
                        className={classes.TextFeild}
                        onChange = {(e)=>{setPassword(e.target.value)}}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.TextFeild}
                        onClick = {login}
                        >
                            LOGIN
                    </Button>
                </FormControl>
            </CardContent>
            <CardActions>
                <Typography>
                    Haven't Registered yet?
                {/* <Link to="/reg"   */}
                    <Button  style={{fontSize:'16px',padding:'8px' ,color:'blue',cursor:'pointer'}} onClick={handleSubmit} >
                         signup
                    </Button>
                    
                {/* </Link> */}
                </Typography>
            </CardActions>
            <div>
            {/* <h1>Welcome bro , {loginstatus}</h1> */}
            </div>
           
        </div>
        :
        <div>
            <Register />
        </div>

        }
    </div>
    )
}

export default Login
