import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import EventDetails from './screens/EventDetails.js';
import './bootstrap.css';

const App = () => {
  return (
    <Router>
      <Header />

        <main>
          <Container fluid className="px-0">
            <Routes>
              <Route path='/' exact element={<HomeScreen />} />
              <Route path='/event/:id' element={<EventDetails />} />
            </Routes>
          </Container>
        </main>
        
      <Footer />
    </Router>
    );
}

export default App;
