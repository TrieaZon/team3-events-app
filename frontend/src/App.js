import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './bootstrap.css';
import HomeScreen from './screens/HomeScreen';
import EventDetails from './screens/EventDetails.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';


const App = () => {
  return (
    <Router>
      <Header />

        <main>
          <Container fluid className="px-0">
            <Routes>
              <Route path='/' exact element={<HomeScreen />} />
              <Route path='/events/:id' element={<EventDetails />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
            </Routes>
          </Container>
        </main>
        
      <Footer />
    </Router>
    );
}

export default App;
