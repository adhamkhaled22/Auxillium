import React from "react";
import "./App.css";
import MySurvey3 from "./Surv_type3";
import Surveythree from "./Surv_dis3";
import Sidebar from "./Components/Sidebar.js";
import { Container, Row, Col, Button,Image } from "react-bootstrap";
function SurveyAppDIS(){
    return(
       
        <Container fluid className="py-4">
        <Row>
          <Sidebar />
          <Col md={9}>
            <div>
                <Surveythree/>
            </div>
        </Col>
        </Row>
        </Container>
       

    )
}
export default SurveyAppDIS;