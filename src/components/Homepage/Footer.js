import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter , MDBInput , MDBBtn} from "mdbreact";
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
const Footer = () => {
    const style = {
        backgroundColor:'#EDBF69'
    }
    const LinkStyle={
       color:'black',
       TextDecoder:'underline'
    }
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={style}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">About us</h5>
            <p>
              TamilNadu's most trusted event planning website!Check prices , contact the owner and that's it boom.
                        Happy wedding!
            </p>
          </MDBCol>
          <MDBCol md="4" >
            <h5 className="title">Resources</h5>
            <ul >
              <li className="list-unstyled">
                <Link to="/home" style={LinkStyle}>Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/halls" style={LinkStyle}>Halls</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact" style={LinkStyle}>Contact us</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/privacy" style={LinkStyle}>Privacy policy</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
              <p>Subscribe to latest newsletter</p>
              <div style={{display:'inline-block'}}>
                    <MDBInput  icon="envelope" group type="email" validate error="wrong"
                    success="right"  style={{display:'inline-block'}}/>
                    <div className="text-center">
                        <MDBBtn 
                        style=
                        {{ 
                            backgroundColor: "#BF3325" , color:'white' 
                         }}
                        >
                            Subscribe
                        </MDBBtn>
                    </div>
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center mt-5">
             <MDBCol md="12">
                <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <PinterestIcon fontSize="large" />
             </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <span>e-hall</span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;