import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core'
import { red } from '@material-ui/core/colors';
//  import chennai from 'src/chennai.jpg';
// import mumbai from '../img/mumbai.webp';
// import delhi from '/img/delhi.webp';
// import hyderabad from '../img/hyderabad.jpg';
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
            height:'200px',
            // paddingTop: '56.25%',
            transition: 'transform .7s ease',
            '&:hover':{
                transform: 'scale(1.2)',
            }
        },
        location:{
            color:'black',
            padding:'10px 50px 5px 50px',
            textDecoration:'none',
            '&:hover' :{
               color:'violet',
               textDecoration:'underline',
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
            img:'/img/delhi.webp',
            name:'Delhi'
        },
        {
            img:'/img/mumbai.webp',
            name:'Mumbai' 
        },
        {
            img:'/img/hyderabad.jpg',
            name:'Chennai' 
        },
        {
            img:'/img/chennai.jpg',
            name:'Hyderabad' 
        }
    ]
    const classes = styles();

    const nodeRef = React.useRef(null);
    return (

        // component definition
        // ====================

       <Container>
            {/* <hr  style={{fontSize:'50px' , fontWeight:'900' , padding:'15px 0px'}}/> */}
                <hr/>
               <h3 style={{textAlign:'center' , paddingBottom:'30px', paddingTop:'-20px'}}>Places</h3>
            {
               
            placeDetails.map(({img,name})=>{
                return(
                    <Card className={classes.root} key={name} ref={nodeRef}>
                       <Link to="/halls" title="hello"  >
                        <img
                        src={img}
                        className={classes.media}
                        alt="places images goes here"
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
                )
            })
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
