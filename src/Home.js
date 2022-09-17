import React from 'react';
import "./App.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container, Row, Col, Button,Image } from "react-bootstrap";
import 'react-metric-card/dist/index.css';
import Card from './Components/Card';
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Sidebar from './Components/Sidebar';
import PiePie1 from "./Components/PiePie1";
import PiePie from "./Components/PiePie";
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Card4 from './Components/Card4';

const Home = () => {
    const percentage = 67;
  const data = [
    { name: "Jan", Patients: 270 },
    { name: "Feb", Patients: 234 },
    { name: "Mar", Patients: 175 },
    { name: "Apr", Patients: 213 },
    { name: "May", Patients: 422 },
    { name: "Jun", Patients: 321 },
    { name: "Jul", Patients: 97 },
    { name: "Aug", Patients: 241 },
    { name: "Sep", Patients: 373 },
    { name: "Oct", Patients: 88 },
    { name: "Nov", Patients: 114 },
    { name: "Dec", Patients: 130 },
  ];
  var numbp=localStorage.getItem("numbp");
  if(numbp==null){
    numbp=20;
    localStorage.setItem("numbp", 20) }
  var numbp2=localStorage.getItem("numbp2");
  if(numbp2==null){
    numbp2=10;  
    localStorage.setItem("numbp2", 10) }
  var numbp3=localStorage.getItem("numbp3");
    if(numbp3==null){
      numbp3=5;  
      localStorage.setItem("numbp3", 5) }

  var numbp4=localStorage.getItem("numbp4");
  if(numbp4==null){
    numbp4=30;  
    localStorage.setItem("numbp4", 30) }   
  return (
    <Container fluid className="py-1">
    <Row>
    <Sidebar />
      <Col md={9}>
      <Container>
      <Container>
              <Row>
                <Col md={12}  className="topname"><center><h1>Welcome To Auxillium </h1></center> </Col>
              </Row>
              </Container>
              <Row className='p-4'>
                <Col sm={6} className="withborder1,Cards1">
                
                    <Row className="Cards2">
                      <Card pnum={numbp}>
                      </Card > 
                    </Row>
                
                  </Col>
                  <Col sm={6}  className="withborder1">
                  
                    <Row className="Cards1" >
                    <Card2
                      pnum={numbp2}>
                      </Card2>

  
                   
                    </Row>
                  
                  </Col>
                  <Col sm={6}  className="withborder1">
                  
                    <Row className="Cards2">
                      <Card3
                      pnum={numbp3}>
                      </Card3>
                    </Row>
                  
                  </Col>
                  <Col sm={6}  className="withborder1">
                  
                    <Row  className="Cards1">

                  <Card4
                  pnum={numbp4}>
                      </Card4>
                   
                    </Row>
                  
                  </Col>
              </Row>
              </Container>
        <Container>
          <Row>
          <Col md={4} className="chartcontainer">
              <div  className="withborder">
              <p className="ChartTit">Average Age</p>
                  <PiePie1/>
              </div>
            </Col>
            <Col md={4} className="chartcontainer">
              <div className="withborder">
              <p className="ChartTit">Bed Capacity</p>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#0000FF`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
            
            />
            </div>
            </Col>
            
         
        
       
          
           
            <Col md={4} className="chartcontainer">
              <div  className="withborder">
              <p className="ChartTit3">Patients Gender</p>
                  <PiePie/>
              </div>
            </Col>
          </Row>
          </Container>
       
        <Container>
          <Container>
          <Row>
            <Col md={12} className="chartcontainer">
              
            <div className="withborder">
            <p className="ChartTit2">Average Patients Per year</p>
              <div>
              <BarChart
                width={880}
                height={300}
                data={data}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="Patients"
                  fill="#0000FF"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
              </div>
              </div>
              </Col>
              </Row>
              </Container>
           
        
            <Col md={12} className="chartcontainer  pt-0">
            
            <div className="withborder">
            <p className="ChartTit4">Doctors Avaliable</p>
 <table class="table table-bordered border-primary">
  <thead >
    <tr>
      <th class="colorfy"scope="col"> #</th>
      <th class="colorfy" scope="col">First</th>
      <th class="colorfy" scope="col">Last</th>
      <th class="colorfy" scope="col">Department</th>
      <th class="colorfy" scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mohamed</td>
      <td>Khafaga</td>
      <td>Radiology</td>
      <td>M.Khafaga@Dr.Rosche.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Abdelaziz</td>
      <td>Soliman</td>
      <td>Cardiology</td>
      <td>A.Soliman@Dr.Rosche.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Noor</td>
      <td>Sameh</td>
      <td>Hematology</td>
      <td>N.Sameh@Dr.Rosche.com</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Sayed</td>
      <td>Zaki</td>
      <td>General Surgery</td>
      <td>S.Zaki@Dr.Rosche.com</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Salma</td>
      <td>Khaled</td>
      <td>Pediatrics</td>
      <td>S.Khaled@Dr.Rosche.com</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Reem</td>
      <td>Marwan</td>
      <td>Oncology</td>
      <td>R.Marwan@Dr.Rosche.com</td>
    </tr>
  </tbody>
</table>
</div>
</Col>

</Container>
      </Col>
    </Row>
  </Container>
  )
}

export default Home