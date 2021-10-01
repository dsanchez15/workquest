import React, { useState, useEffect } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";
import { Button, Navbar, Container, Form, FormGroup, Modal } from 'react-bootstrap';

//import ButtonModalComponent from './components/ButtonModalComponent';
//import Questions from "./pages/Questions";
import useFormulario from "./hooks/useFormulario";

import { columnsQuestions, questions as dataQuestions } from "./data/data";

function App() {
  const [questions, setQuestions] = useState([])

  const getQuestions = () => {
    setQuestions(dataQuestions);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const [formulario, handleChange, reset] = useFormulario({
    id: '',
    question: '',
    answer: ''
  })

  const submit = e => {
    e.preventDefault()
    setQuestions([
      ...questions,
      formulario
    ])
    reset()
  }

  const [isOpen, setIsOpen] = useState(false);

  const open = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Modal show={isOpen}>
          <Form>
            <FormGroup>
              <span name="id" value={formulario.id = questions.length + 1} />
              <Form.Label >Pregunta:</Form.Label>
              <Form.Control
                type="text"
                name="question"
                placeholder='Pregunta'
                value={formulario.question}
                onChange={handleChange}
              />
              <Form.Label >Respuesta:</Form.Label>
              <Form.Control
                type="text"
                name="answer"
                placeholder='Respuesta'
                value={formulario.answer}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
          <Button onClick={submit}>Save</Button>
          <Button onClick={open}>Close</Button>
        </Modal>

        <Button onClick={open}>Modal</Button>
        <br></br>
        {/* <Questions data={questions}/> */}
        <DataTable
          columns={columnsQuestions}
          data={questions}
          title="Ejemplo"
        />
      </Container>

    </>
  );
}

export default App;
