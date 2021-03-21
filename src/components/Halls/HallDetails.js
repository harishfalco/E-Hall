import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import hallphoto from './hallphoto.webp'
import './HallDetails.css'
import SimpleImageSlider from "react-simple-image-slider";

const details = [
    {
        name:"XYZ Marriage Hall",
        description:"have a great wedding",
        cost:"20,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
    },
    {
        name:"ABC  Marriage Hall",
        description:"a great wedding",
        cost:"19,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
    },
    {
        name:"AAA Marriage Hall",
        description:" great wedding",
        cost:"12,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
    },
    {
        name:"Simple name",
        description:" wedding",
        cost:"33,000",
        owner:"harish",
        district:"CBE",
        state : "Tamil Nadu",
        Features :" AC Hall",
    },
]

const images = [
    { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
    { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
    { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
    { url: "https://creativemarket.com/akerdesign/688444-Conference-Hall-018?u=ohlove" },
  ];

const HallDetails = () => {

    return (
            <Container>
                {
                    details.map((e)=>(
                        <div id="container">	
                                <div className="product-details">
                                <h1>{e.name}</h1>
                                {/* <span class="hint-star star">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span> */}
                                    <p className="information">{e.description}</p>
                            <div className="control">
                                <button className="btn">
                                    <span className="price">{e.cost}/perday</span>
                                    <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                    <span className="buy">View Details</span>
                                </button>
                            </div>        
                            </div>
                            <div className="product-image">
                                 <img src={hallphoto} alt="Omar Dsoky"  id="hall-image"/> 
                                 <button>hi</button>
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
