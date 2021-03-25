import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import chennai from '../img/chennai.jpg';
import mumbai from '../img/mumbai.webp';
import delhi from '../img/delhi.webp';
import hyderabad from '../img/hyderabad.jpg';
import hall from '../Halls/hallphoto.webp'
import {Link} from 'react-router-dom'
import styled from "styled-components";


// styling material-UI components
// =============================
const styles  = makeStyles((theme)=>(
    {
        root:{
            width:'250px',
            margin:'0px 20px 25px 30px',
            display:'inline-block'
        },
        media:{
            height:'0px',
            paddingTop: '56.25%',
            transition: 'transform .5s ease',
            '&:hover':{
                transform: 'scale(1.5)',
            }
        },
        location:{
            color:'black',
            padding:'10px 50px 5px 50px',
            textDecoration:'none',
            '&:hover' :{
               color:'violet',
               textDecoration:'underline'
            }
        },
        link:{
            '&:hover':{
                textDecoration:'none',
            }
        },
    }
))



const Places = () => {

    // array of places and images
    // =========================

    const placeDetails = [
        {
            img:'../img/mumbai.webp',
            name:'Trichy'
        },
        {
            img:'../img/delhi.webp',
            name:'Coimbatore' 
        },
        {
            img:'../img/hyderabad.jpg',
            name:'Chennai' 
        },
        {
            img:'../img/chennai.jpg',
            name:'Madurai' 
        }
    ]
    const classes = styles();
    return (

        // component definition
        // ====================

       <Container>
            {
            placeDetails.map(({img,name})=>(
                <Card className={classes.root}>
                  <Link to="/halls" title="hello" >
                        <img
                        src={hall}
                        className={classes.media}
                        alt="no img"
                        />
                   </Link>
                 <CardContent>
                    <Link to="/halls" title="hello" className={classes.link}>
                        <h3 className={classes.location}>
                            {name}
                        </h3>
                    </Link>
                 </CardContent>
                </Card>
            ))
             }
       </Container>
    )
}

export default Places

// const Container = styled.div`
// margin:0px 20px;
// `;

const Container = styled.div
`margin:0px 50px;
`;
