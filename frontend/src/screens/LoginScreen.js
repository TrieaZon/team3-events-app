import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {login} from '../actions/userActions'
import {Form, Button, Row, Col} from 'react-bootstrap'


const LoginScreen = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // text box input bindings
  const [email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  // const [authenticated, setAuthenticated] = useState('')


  //redirect if optional 
  const redirect = location.search ? location.search.split('=')[1] : '/'      

  const userLogin = useSelector((state) => state.userLogin)

  const {loading, error, userInfo} = userLogin

    
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    // navigate("/ticket")         
    //not secure, sends password 
  };
  
  
  return (
    <FormContainer>
      <h1> Login </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}

      <Form onSubmit={submitHandler}>
        <Form.Group className="mt-3 mb-1" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}>              
          </Form.Control>
        </Form.Group>

        <Form.Group className="mt-1 mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}>  
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-0.5 mb-3">
          Submit
        </Button>
      </Form>
      
    
      <Row className='mb-4'>
        <Col>
        <Form>
          <Form.Check 
          type="switch"
          id="new-user"
          label="New User?"
          onChange={() => navigate("/signup")}/>
        </Form>
        
        

        {/*  New user?{' '} 
        <Link to="/signup">
        <Link to={redirect ? `/login?redirect=${redirect}` : '/signup'}>
          </Link> */}
          </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen