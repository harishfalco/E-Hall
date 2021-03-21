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
const useStyles = makeStyles({
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    },
    btnStyle :{
        display :'flex',
        justifyContent:'flex-end',
        marginBottom:'10px',
        border:'white'
    }
  });
  
const navLinks = [
        { title: `Home`, path: `/places` },
        { title: `Halls`, path: `/halls` },
        { title: `Login`, path: `/login` }
        // { title: `Login`, path: `/` }
      ]

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <Container maxWidth="sm">   
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
                   </List>
                </Container>
                {/* <Button color="filled" className={classes.btnStyle}>Login</Button> */}
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar
