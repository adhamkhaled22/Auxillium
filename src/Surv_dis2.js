import React,{useState,useCallback} from 'react';
import MySurvey2 from './Surv_type2';
import axios from "axios";
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from "react-bootstrap";
const Surveytwo =()=> {
    const [showPage,setshowPage] = useState(true);
    const onCompletePage = useCallback(async (data)=>{
        console.log(data);
        localStorage.setItem("Survey",data)
         await axios.post('http://127.0.0.1:5000/esi',{data : data}).then(res=>{localStorage.setItem("results", JSON.stringify(res.data)) });
        //this.setState({iscompleted:true});
        //localStorage.setItem("results", JSON.stringify(res.data))
        setshowPage(!showPage)
    },[showPage])
    const setFinalPage = ()=>{
        var zz=localStorage.getItem("results")
        var z1=zz.substring(1,zz.length-1);
        var z2=z1.split(":");
        var r1=z2[0].substring(1,z2[0].length-1);
        var r2=z2[1].substring(1,z2[1].length-1)
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
              <center><h1>Patient Priority is {r1} </h1></center>
              <br/>
              <center><h1>with Confidence of {r2}% </h1></center>
              <br/>
              <center> <h1> with Model Stability of {r3}%</h1></center>
              </div>
            </Col>
            <Col>
            <Link to="/Home"> 
            <button type="button" class="btn btn-primary position-relative">Exit <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"></span></button></Link>
            
            </Col>
            </Container>
        </main>
        )
    }


    return(
        <div>{
          showPage?
          < MySurvey2 showCompletedPage={data=>onCompletePage(data)} />:
          setFinalPage()
         }
        </div>
    )
}
export default Surveytwo;