import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Home } from "@material-ui/icons"
import {List , ListItem , ListItemText, IconButton , Container} from "@material-ui/core"
import {makeStyles} from '@material-ui/core' 
import {Button } from '@material-ui/core'
import Login from '../Login'
import {Link} from 'react-router-dom';
import {useState} from 'react'
import ImageShow from './ImageShow'
import HomePage from './HomePage'

const useStyles = makeStyles({
    container :{
      backgroundColor:'#faf3e0'
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-around`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `#1e212d`,
       '&:hover' :{
           padding:'0px 4px',
           border:'none',
           color:'violet'
       }
    },
    btnStyle :{
        display :'flex',
        justifyContent:'flex-end',
        margin:'0px 4px 0px 30px',
        border:'white',
        color:''
    }
  });
  
const navLinks = [
        { title: `Home`, path: `/` },
        { title: `Halls`, path: `/halls` },
        { title: `Contact Us`, path: `` }
        // { title: `Login`, path: `/` }
      ]

const Navbar = (props) => {
    const classes = useStyles();
    const [status, setStatus] = useState('logout');
    const handleClick = ()=>{
        // props.setIsloggedin(false);
    }
    return (
        <div>
            <AppBar position="static" className={classes.container}>
            <Toolbar> 
                <Container maxWidth="sm" >   
                   <List component="nav" className={classes.navDisplayFlex}>
                       {
                           navLinks.map(({title,path})=>(
                               <Link to={path} key={title} className={classes.linkText} >
                               <ListItem button>
                                   <ListItemText primary={title}  />
                               </ListItem>
                               </Link>
                           ))
                       }
                       <Link to="/login">
                            <Button  className={classes.btnStyle} onClick={handleClick}>Login</Button>
                       </Link>
                         
                   </List>
                </Container>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar
