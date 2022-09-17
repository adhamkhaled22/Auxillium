import React, {useMemo} from 'react';
import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import {useDropzone} from 'react-dropzone';
import { Container, Row, Col, Button,Image } from "react-bootstrap";
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  
  function Upload(props) {
    const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject
    } = useDropzone({accept: {'image/*': []}});
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isFocused,
      isDragAccept,
      isDragReject
    ]);
  
    return (
        <Container fluid className="py-4">
            
        <Row>
          <Sidebar />
          <Col md={9}>
           
          <Container>
              <Row>
                <Col md={12}  className="topname"><center><h1>Please Upload DICOM Files </h1></center> </Col>
              </Row>
              </Container>
      <div className="container">
        <div {...getRootProps({style})}>
          <input {...getInputProps()} />
          <p>Drag and Drop DICOM Files here</p>
        </div>
      </div>
      </Col>
        </Row>
        </Container>
    );
  }
  
  

export default Upload;