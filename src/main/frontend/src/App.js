import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

//import ButtonModalComponent from './components/ButtonModalComponent';
import Questions from "./pages/Questions";

function App() {

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <Questions />
    </>
  );
}

export default App;
