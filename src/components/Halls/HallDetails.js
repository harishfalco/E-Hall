import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import hallphoto from './hallphoto.webp'
import './HallDetails.css'
import SimpleImageSlider from "react-simple-image-slider";
import {Link} from 'react-router-dom'
const details = [
    {
        name:"XYZ Marriage Hall",
        description:"have a great wedding",
        cost:"20,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
        url: "/hallImages/hall1.PNG",
    },
    {
        name:"ABC  Marriage Hall",
        description:"a great wedding",
        cost:"19,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
        url: "/hallImages/hall2.PNG",
    },
    {
        name:"AAA Marriage Hall",
        description:" great wedding",
        cost:"12,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
        url: "/hallImages/hall3.PNG",
    },
    {
        name:"Simple name",
        description:" wedding nice wbekbfibskfbasbkasbkbsabfABajbfjbJSABkjsabkABBFHBFKAHSBFKHASBFHSBAKHFBASKBCKBkbKBkbkdbskdbgsvjaaaaaaaaaaaaaaaaaaaaaaa",
        cost:"33,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
        url: "/hallImages/hall4.PNG",
    },
]

// const images = [
//     { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
//     { url: "https://www.shutterstock.com/image-photo/wedding-hall-520555021" },
//     { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
//     { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
//   ];

const HallDetails = () => {

    return (
            <Container>
                {
                    details.map((e)=>(
                        <div id="container">	
                                <div className="product-details">
                                    {/* product name */}
                                <h1>{e.name}</h1>
                                {/* Product testing section */}
                                    <p className="information">{e.description}</p>
                                    {/* Button */}
                            <div className="control">
                                <button className="btn">
                                    {/* <span className="price">{e.cost}/perday</span> */}
                                    <Link to="/onehall" ><span  className="buy">More details</span></Link>
                                    
                                </button>
                            </div>        
                            </div>
                            {/* product image section */}
                            <div className="product-image">
                                 <img src={e.url} alt="Omar Dsoky"  id="hall-image"/> 
                                 {/* the hover description section */}
                                <div className="info">
                                    <h2>The Description</h2>
                                    <ul>
                                        <li><strong>Name:     </strong> {e.name}</li>
                                        <li><strong>Owner:    </strong>{e.owner}</li>
                                        <li><strong>District:</strong>{e.district}</li>
                                        <li><strong>State:     </strong>{e.state}</li>
                                        <li><strong>Fee :      </strong>{e.cost}/perday</li>
                                        <li><strong>Features: </strong>{e.features}</li>
                                    </ul>
                                </div>
                            </div>
                </div>
                         
                    ))
                }
                
            </Container>
    )
}

export default HallDetails
