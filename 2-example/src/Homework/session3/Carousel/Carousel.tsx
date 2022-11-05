import React from 'react'
import Carousels from 'react-bootstrap/Carousel';


function Carousel() {
    return (
        <div className="wrapper" style={{width:700}}>
            <Carousels>
                <Carousels.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2022/06/13/14/58/road-7260175__340.jpg"
                        alt="First slide"
                    />
                    <Carousels.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousels.Caption>
                </Carousels.Item>
                <Carousels.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2022/11/02/11/56/fish-7564701__340.jpg"
                        alt="Second slide"
                    />

                    <Carousels.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousels.Caption>
                </Carousels.Item>
                <Carousels.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__340.jpg"
                        alt="Third slide"
                    />

                    <Carousels.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousels.Caption>
                </Carousels.Item>
            </Carousels>
        </div>
    );
}

export default Carousel