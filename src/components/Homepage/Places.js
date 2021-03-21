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
const styles  = makeStyles((theme)=>(
    {
        root:{
            maxWidth:300,
        },
        media:{
            height: 0,
            paddingTop: '56.25%',
        },
        location:{
            color:red,
            paddingLeft:'10px'
        }
    }
))



const Places = () => {
    const placeDetails = [
        {
            img:'../img/mumbai.webp',
            name:'MUMBAI'
        },
        {
            img:'../img/delhi.webp',
            name:'DELHI' 
        },
        {
            img:'../img/hyderabad.jpg',
            name:'HYDERABAD' 
        },
        {
            img:'../img/chennai.jpg',
            name:'CHENNAI' 
        }
    ]
    const classes = styles();
    console.log(placeDetails[0].img)
    return (
        <div>
            {
            placeDetails.map(({img,name})=>(
                <Card className={classes.root}>
                <img
                src={img}
                className={classes.media}
                alt="no img"
                />
                 <CardContent>
                    <h3 className={classes.location}>
                        {name}
                    </h3>
                 </CardContent>
              </Card>
            
            ))

             }
            
        
                <div>
                    
                </div>
        </div>
    )
}

export default Places
