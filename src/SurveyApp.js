import React from "react";
import "./App.css";
import Survone from "./Surv_dis";
import Sidebar from "./Components/Sidebar.js";
import { Container, Row, Col, Button,Image } from "react-bootstrap";
function SurveyApp(){
    return(
       
        <Container fluid className="py-4">
        <Row>
          <Sidebar />
          <Col md={9}>
            <div>
                <Survone/>
            </div>
        </Col>
        </Row>
        </Container>
       

    )
}
export default SurveyApp;