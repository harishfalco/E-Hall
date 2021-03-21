import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import hallphoto from './hallphoto.webp'
import './HallDetails.css'
const HallDetails = () => {
    return (
            <Container>
                <div id="container">	
                    <div className="product-details">
                    <h1>VSSM Marriage Hall</h1>
                    {/* <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span> */}
                        <p className="information">Good ambiance</p>
                <div className="control">
                    <button className="btn">
                    <span className="price">18,000/perday</span>
                    <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span className="buy">View Details</span>
                    </button>
                </div>        
                </div>
                <div className="product-image">
                    <img src={hallphoto} alt="Omar Dsoky" />
                <div className="info">
                    <h2>The Description</h2>
                    <ul>
                        <li><strong>Name:     </strong> VSSM Marriage Hall</li>
                        <li><strong>Owner:    </strong>xxx</li>
                        <li><strong>District:</strong>Coimbatore</li>
                        <li><strong>State:     </strong>Tamil Nadu</li>
                        <li><strong>Fee :      </strong>18,000/perday</li>
                        <li><strong>Features: </strong>AC Hall available</li>
                    </ul>
                </div>
                </div>
                </div>
            </Container>
    )
}

export default HallDetails
