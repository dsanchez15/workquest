import React from "react"

import { Form, FormGroup } from 'react-bootstrap';

const FormNewQuestion = () => {
    return (
        <FormGroup>
            <Form.Label htmlFor="question">Pregunta:</Form.Label>
            <Form.Control type="text" />
            <Form.Label htmlFor="answer">Respuesta:</Form.Label>
            <Form.Control type="text" />
        </FormGroup>
    )
}

export default FormNewQuestion;