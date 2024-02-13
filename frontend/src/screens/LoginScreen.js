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


  //redirect if optional 
  const redirect = location.search ? location.search.split('=')[1] : '/'      

  const userLogin = useSelector((state) => state.userLogin)

  const {loading, error, userInfo} = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])


  //text box input bindings
  const [email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  
  
  return (
    <FormContainer>
      <h1> Login </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}

      <Form onSubmit={submitHandler}/>
      <Form.Group className="mb-2" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    
      <Row className='mb-3'>
        <Col>
        New user?{' '} 
        <Link to={redirect ? `/login?redirect=${redirect}` : '{/signup'}>
          </Link>
          </Col>
          </Row>
    </FormContainer>
  )
}

export default LoginScreen