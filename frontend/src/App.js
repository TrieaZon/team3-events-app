import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import './bootstrap.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
      <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      <Footer/>
    </Router>
    </>
    );
}

export default App;
