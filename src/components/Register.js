import React from 'react'
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Login from  './Login'
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

    return (
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
                    />
                    <TextField  
                        label="email" 
                        variant="filled"  
                        type="email"
                        color="success" 
                        className={classes.TextFeild}
                    />
                    <TextField  
                        label="Contact no" 
                        variant="filled"  
                        type="tel"
                        color="success" 
                        className={classes.TextFeild}
                    />
                    <TextField  
                        label="Password" 
                        variant="filled"  
                        type="password"
                        color="success" 
                        className={classes.TextFeild}
                    />
                    <TextField  
                        label="Confrim Password" 
                        variant="filled"  
                        type="password" 
                        className={classes.TextFeild}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.TextFeild}
                        >
                            REGISTER
                    </Button>
                </FormControl>
            </CardContent>
            <CardActions>
                <Typography style={{paddingLeft:'50px'}}>
                    Alreday an User?
                <Link to="/Login"  style={{fontSize:'16px',padding:'8px'}}>
                    Login
                </Link>
                </Typography>
            </CardActions>

        </div>
    )
}

export default Register
