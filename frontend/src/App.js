import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import 'bootswatch/dist/darkly/bootstrap.min.css';


function App() {
  return (
    <Router>
    
      <Header />
      <main>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
    
    </Router>
  );
}

export default App;
