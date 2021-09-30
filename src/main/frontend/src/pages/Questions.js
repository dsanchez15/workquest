import React, { useState, useEffect } from "react"

import DataTable from "react-data-table-component";
import { Button } from 'react-bootstrap';

import { columnsQuestions, questions } from "../data/data";
import ButtonModalComponent from "../components/ButtonModalComponent";
import FormNewQuestion from "./FormNewQuestion";

const Questions = () => {
    const [listQuestions, setListQuestions] = useState([]);

    const getQuestions = () => {
        setListQuestions(questions);
    }

    useEffect(() => {
        getQuestions();
    }, []);

    const saveQuestion = () => {
        console.log(listQuestions);
        let quest = {
            id: listQuestions.length + 1,
            question: "Que es",
            answer: "Un lenguaje"
        };
        setListQuestions([...listQuestions, quest]);
    };

    return (
        <>
            <ButtonModalComponent nameButton="Crear Pregunta" modalBody={<FormNewQuestion />} modalButtonSave={<Button onClick={saveQuestion}>Save</Button>} />
            <DataTable
                columns={columnsQuestions}
                data={listQuestions}
                title="Ejemplo"
            />
        </>
    );
}

export default Questions;