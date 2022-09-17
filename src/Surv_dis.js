import React,{useState,useCallback} from 'react';
import MySurvey from './survey_type';
import axios from "axios";
import "./App.css";
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from "react-bootstrap";
const Survone =()=> {
    const [showPage,setshowPage] = useState(true);
    const onCompletePage = useCallback(async (data)=>{
        console.log(data);
        localStorage.setItem("Survey",data)
         await axios.post('http://127.0.0.1:5000',{data : data}).then(res=>{localStorage.setItem("results", JSON.stringify(res.data)) });
        setshowPage(!showPage)
    },[showPage])
    const setFinalPage = ()=>{
        var zz=localStorage.getItem("results")
        var zz2=parseInt(localStorage.getItem("numbp4"))+1
        localStorage.setItem("numbp4", zz2) 
        console.log(zz.charAt(2))
        console.log(zz)
        if(zz.charAt(2)=='A')
        {
            var zz3=parseInt(localStorage.getItem("numbp3"))+1
            localStorage.setItem("numbp3", zz3)
            var zz1=parseInt(localStorage.getItem("numbp"))+1
            localStorage.setItem("numbp", zz1)
        }
        var z1=zz.substring(1,zz.length-1);
        var z2=z1.split(":");
        var r1=z2[0].substring(1,z2[0].length-1);
        var r2=z2[1].substring(1,z2[1].length)
        var r3=z2[2].substring(0,z2[2].length-1)
        return(
        <main>
            <Container>
              <Row>
                <Col md={12}  className="topresults">
                <center><h1>Results</h1></center> 
                </Col>
              </Row>
              </Container>
            <Container>
            <Col md={12} className="chartcontainer">
              <div  className="withborder">
              <center><h1>The pateint should be {r1}</h1></center>
              <br/>
              <center> <h1> with Confidence of {r2}%</h1></center>
              <br/>
              <center> <h1> with Model Stability of {r3}%</h1></center>
              <br/>

              </div>
            </Col>
            <Col md={12} className="chartcontainer">
            <div  className="withborder">
            <center><h1>In Case of Patient Admit Please refer to ESI </h1></center>
            </div>
            </Col>
          

           
            <Row className='d-flex justify-content-between'>
            <Link to="/SurveyAppESI"><Button>ESI</Button></Link>
            <Link to="/Home">  <Button>Exit</Button></Link>
            
            </Row>
            </Container>
            </main>
            
        )
    }


    return(
        <div>{
          showPage?
          < MySurvey showCompletedPage={data=>onCompletePage(data)} />:
          setFinalPage()
         }
        </div>
    )
}
export default Survone;