import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen.js';

function App() {
  return (
    <>
    <Router>
    <Container>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
      </Routes>
    </Container>
    </Router>
    </>
  );
}

export default App;
