import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
    return(
      <>
         <FormControl autocomplete="on">
                    <TextField  
                        label="Name" 
                        variant="outlined"  
                        type="text"
                        color="success" 
                        className={classes.TextFeild}
                    />
                    <TextField  
                        label="email" 
                        variant="outlined"  
                        type="email"
                        color="success" 
                        className={classes.TextFeild}
                    />
                    <TextField  
                        label="Contact no" 
                        variant="outlined"  
                        type="tel"
                        color="success" 
                        className={classes.TextFeild}
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
                      rowsMin={8}
                      className={classes.TextArea}
                      />
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.ButtonStyle}
                        >
                           SUBMIT QUERY
                    </Button>
                </FormControl>
      </>
    );
}
export default ContactForm