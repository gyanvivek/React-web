import React from 'react'
import './About.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
export default function About() {
    return (
        <div>
            <div className="aboutus">

            <Row around="xs">
  <Col xs={12} sm={6} md={4} lg={4}>  
  
  <div className="squarea">
  <span></span>
  <span></span>
  <span></span>
    <div className="contenta">
       
        <h1>Bili is a professional services technology company that delivers leading Application Design, 
      Development and Delivery services to clients.</h1>
      <h2>Using our expertise, approach and experience,
           we have successfully developed and managed best-in-class systems across a wide range of industries.</h2>
           <p>Our services are designed to provide rapid, 
               flexible, and secure solutions to our clients that deliver business results and value.</p>
    </div>
</div>
  </Col>
</Row>




  
            </div>
        </div>
    )
}
