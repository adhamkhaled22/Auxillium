import React from 'react'
import { Col,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo1 from '../assets/imgs/logo1.svg'
const Sidebar = () => {
  return (
    <Col md={2} className="hesham" >
    <div className="sidebar-top">
   <Link to="/Home"> <Image src={logo1} className="photo"></Image></Link>
    </div>
    <ul className="mt-4 sidebar-nav">
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/SurveyApp">Admission</Link></li>
      <li><Link to="/SurveyAppDIS">Discharge</Link></li>
      <li><Link to="/Upload">Upload</Link></li>
      <li><Link to="/Login">Logout</Link></li>
      
    </ul>
  </Col>
  )
}

export default Sidebar