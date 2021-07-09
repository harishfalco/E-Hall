import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import styled from 'styled-components'
import Axios from 'axios'
// import { DatePicker  , MuiPickersUtilsProvider} from '@material-ui/pickers'
// // import DateFnsUtils from '@date-io/date-fns'; // choose your lib
// import { MDBDatePicker } from 'mdbreact';

const useStyle = makeStyles((theme)=>({
    TextFeild:{
        margin: theme.spacing(2),
        width: '50ch', 
    },
    DateFeild:{
        margin: theme.spacing(1),
        width: '22ch', 
    },
    SeletcFeild:{
        margin: theme.spacing(),
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
        marginLeft:'17ch',
        marginTop:'4ch'
    },
}));

const PaymentForm = () => {
    const classes = useStyle();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [fromDate , setFromDate] = useState(' ');
    const [toDate , setToDate] = useState(' ');
    const [card , setCard] = useState(' ');
    
    const handleClick = () =>{
        // console.log("till this");
        Axios.post("http://localhost:3001/book",
        {
         name:name,
         email:email,
         contact:contact,
         fromDate:fromDate,
         toDate:toDate,
         card:card
     }).then((response)=>{
         if(response.data.message){
             alert(response.data.message)
         }
     })

    }

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();


    return (
        <div>
            <FormControl autoComplete="on">
                    <TextField  
                        label="Name" 
                        variant="outlined"  
                        type="text"
                        color="success" 
                        className={classes.TextFeild}
                        value={name}
                        onChange = {(e)=>{setName(e.target.value)}}
                    />
                    <TextField  
                        label="email" 
                        variant="outlined"  
                        type="email"
                        color="success" 
                        className={classes.TextFeild}
                        value={email}
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
                    <div 
                        style={{borderRadius:'10px',marginLeft:'16px', marginRight:'12px' }}
                    >
                        <h5 style={{textAlign:'center',padding:'5px 0px'}}>Select The Dates</h5>
                        <div style={{display:'inline-block'}}>
                            {/* <TextField  
                                // label="From date" paddingLeft:'50px'
                                variant="standard"  
                                type="date"
                                color="success" 
                                className={classes.DateFeild}
                                format="YYYY-MM-DD"
                            /> */}
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker 
                                    className = {classes.DateFeild}
                                />
                             </MuiPickersUtilsProvider>

                            <TextField  
                                // label="To date" 
                                variant="standard"  
                                type="date"
                                color="success" 
                                className={classes.DateFeild}
                                format="YYYY-MM-DD"
                            /> */}
                           {/* <MDBDatePicker  /> */}
                           <input
                           type="date"
                           placeholder ="enter date"
                           data-date-format="DD MMMM YYYY"
                           value={fromDate}
                           onChange = {(e)=>{setFromDate(e.target.value)}}
                           />
                           <input
                           type="date"
                           placeholder ="enter date"
                           data-date-format="DD MMMM YYYY"
                           value={toDate}
                           onChange = {(e)=>{setToDate(e.target.value)}}
                           />
                        </div>
                    </div>
                    <div
                    style={{marginLeft:'16px', marginRight:'12px' }}
                    >
                    <h5 style={{textAlign:'center',padding:'5px 0px'}}>Card Information</h5>
                    <div style={{paddingLeft:'40px'}}>
                        {/* <PaymentInputsWrapper {...wrapperProps} >
                            <svg {...getCardImageProps({ images })}  />
                            <input {...getCardNumberProps()} 
                                value={card} 
                                onChange = {(e)=>{setCard(e.target.value)}} />
                            <input {...getExpiryDateProps()} />
                            <input {...getCVCProps()} />
                        </PaymentInputsWrapper> */}
                    </div>
                    </div>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        className={classes.ButtonStyle}
                        onClick = {handleClick}
                        >
                           Make Payment
                    </Button>
            </FormControl>
        </div>
    )
}

export default PaymentForm
