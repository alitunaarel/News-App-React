

import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import JumboNav from './components/JumboNav';
import NavigationBar from './components/NavigationBar';
import Slider from './components/Slider';


function App() {



  return (
    <div >
      <NavigationBar />
      <JumboNav />
      <Container>
        <Row>
          <Col md="auto">
            <Slider />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
