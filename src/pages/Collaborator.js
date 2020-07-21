import React from 'react'
import bili from '../Images/bili.png'

import work from '../Images/work.svg'
 import './Collaborator.css';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactLogo from '../Images/undraw_react_y7wq.svg';
import MongoLogo from '../Images/undraw_complete_design_ongo.svg';
import NodeLogo from '../Images/nodejs.svg';
import StaticLOgo from '../Images/undraw_static_assets_rpm6.svg';
import GraphicsLogo from '../Images/undraw_design_tools_42tf.svg';
import VideoEditor from '../Images/undraw_Designer_by46.svg'
export default function Collaborator() {
    return (
      
<div className="react">
          <React.Fragment>
              
              <div className='firstdiv'>
          <Row>
  <Col xs={12} sm={3} md={2} lg={1}  className="text1stdiv animate__zoomIn animate__animated animate__delay-1.8s"><h1>Bili</h1>  </Col> 
  <p className='text2div1 animate__slideInDown animate__animated'>Your Skills Collaborates With Our Projects !</p>
  </Row>
              </div>


<div className="seconddiv">

<Row>
  
  <Col xs={12}>
  <h1 className="text1div2">It's in our name: :<span>Bili</span> means <span> Deliver </span></h1><br />
    
    <Row end="xs">
      <Col xs={12} className="text2div2"> 
       <div className="justscroll"> Want to join Bili as a freelancer? <br/>
       <h1>Dont stare just scroll !</h1>
       </div>
       </Col>
    </Row>
  </Col>
</Row>        


</div>
         

<div className="thirddiv">

<div className="textofdiv3">
  <h1 className="text1div3">If you have any of these skills.<br />You are scrolling at the right site.</h1>
  
</div>



<Row around="xs">
  <Col xs={12} sm={6} md={4} lg={4}>  
  
  <div className="square">
  <span></span>
  <span></span>
  <span></span>
    <div className="content">
        <img src={ReactLogo} className="skillLogo" />
      <h2>React.js</h2>
    </div>
</div>
  </Col>
  <Col xs={12}  sm={6} md={4} lg={4}>         
<div className="square">
  <span></span>
  <span></span>
  <span></span>
    <div className="content">
        <img src={MongoLogo} className="skillLogo" />
      <h2>mongodb</h2>
    </div>
</div>
</Col>

<Col xs={12}  sm={6} md={4} lg={4}>         
<div className="square">
  <span></span>
  <span></span>
  <span></span>
    <div className="content">
        <img src={NodeLogo} className="skillLogo" />
      <h2>Node.js</h2>
    </div>
</div>
</Col>

</Row>



<Row around="xs" className="row2">
  <Col xs={12} sm={6} md={4} lg={4}>  
  
  <div className="square">
  <span></span>
  <span></span>
  <span></span>
    <div className="content">
        <img src={StaticLOgo} className="skillLogo" />
      <h2>Basic Frontend</h2>
    </div>
</div>
  </Col>
  <Col xs={12}  sm={6} md={4} lg={4}>         
<div className="square">
  <span></span>
  <span></span>
  <span></span>
    <div className="content">
        <img src={GraphicsLogo} className="skillLogo" />
      <h2>Graphics Designing</h2>
    </div>
</div>
</Col>

<Col xs={12}  sm={6} md={4} lg={4}>         
<div className="square">
  <span></span>
  <span></span>
  <span></span>
    <div className="content">
        <img src={VideoEditor} className="skillLogo" />
      <h2>Video Editor</h2>
    </div>
</div>
</Col>

</Row>

<Link to='/contact' className="button" id="contactbutton">CONTACT US</Link>

</div>









 









          </React.Fragment>
         
</div>
      

           


    )
}
