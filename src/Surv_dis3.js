import React,{useState,useCallback} from 'react';
import MySurvey3 from './Surv_type3';
import axios from "axios";
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from "react-bootstrap";
const Surveythree =()=> {
    const [showPage,setshowPage] = useState(true);
    const onCompletePage = useCallback(async (data)=>{
        console.log(data);
        localStorage.setItem("Survey",data)
         //await axios.post('http://127.0.0.1:5000/Discharge',{data : data}).then(res=>{});
        //this.setState({iscompleted:true});
        //localStorage.setItem("results", JSON.stringify(res.data))
        var zz3=parseInt(localStorage.getItem("numbp2"))+1
        localStorage.setItem("numbp2", zz3)
        var zz1=parseInt(localStorage.getItem("numbp3"))-1
        localStorage.setItem("numbp3", zz1)

        setshowPage(!showPage)
    },[showPage])
    const setFinalPage = ()=>{
        var zz=localStorage.getItem("results")
        return(
        <main>
            <Container>
              <Row>
                <Col md={12}  className="topresults">
                <center><h1>Thanks For Using Auxillium</h1></center> 
                </Col>
              </Row>
              </Container>
          <Container>
            <Col md={12} className="chartcontainer">
            <div  className="withborder">
            
            <center><h1>Patient Discharge Complete</h1></center>
            <br/>
            
            </div>
            </Col>
            <Row className='d-flex justify-content-between'>
            <Link to="/Home">  <Button>Exit</Button></Link>
            
            </Row>
            </Container>
        </main>
        )
    }


    return(
        <div>{
          showPage?
          < MySurvey3 showCompletedPage={data=>onCompletePage(data)} />:
          setFinalPage()
         }
        </div>
    )
}
export default Surveythree;