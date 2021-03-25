import { Carousel } from 'react-bootstrap';
import React from 'react'
import Hall from '../hall.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'


const ImageShow = () => {
    
    const imgWidth = {
        width:'900px',
        height:'450px',
        margin:'30px 300px 30px 200px',
    };

    return (
        <div>
            <Container>
            <div style={imgWidth}>
                <Carousel>
                    <Carousel.Item>
                        <img
                         className=" w-100"
                         src={Hall}
                         alt="no bro"
                         height="350px"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                         className="d-block w-100"
                         src={Hall}
                         alt="no bro"
                         height="350px"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                         className="d-block w-100"
                         src={Hall}
                         alt="no bro"
                         height="350px"
                         />
                    </Carousel.Item>
                </Carousel>
            </div>
            </Container>
        </div>
    )
}

export default ImageShow

const Container = styled.div`
width:700px,
height:900px
`;
