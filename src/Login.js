import React from 'react'
import { Form, Button, Container, Row, Col,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "./assets/imgs/logo1.svg"
const Login = () => {
  return (
      <Container className='py-4'>
          <Row>
              <Col md={6} className="mx-auto">
<Form>
  <Container>
    <Row>
      <Col md={12} className="hesham">
      <Link to="/"> <Image src={logo} className="ashraf"></Image></Link>
        <p className="textformat">LOGIN</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Text className="text-muted textformat">
      If You Don't have an existing account please Sign Up
    
    </Form.Text>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Password" />
  </Form.Group>
  <Container >
    <Row className='d-flex justify-content-between'>
     

  <Link to="/Home">  <Button>Login</Button></Link>
  <Link to="/Signup"><Button>Sign Up</Button></Link>

</Row>
</Container>
  </Col>
  </Row>
  </Container>
</Form>
</Col>
</Row>
</Container>

  )
}

export default Login