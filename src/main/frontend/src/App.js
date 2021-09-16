import React, { useState, useEffect } from "react"
import './App.css';

import Table from './components/Table/Table.js'

function useGetAllQuestions() {
  const [questions, setQuestions] = useState([]);
  const getQuestions = () => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
      });
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return { questions }
}






/*const Questions = () => {

  const [questions, setQuestions] = useState([]);

  const fetchQuestions = () => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
      });
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return questions.map((question, index) => {
    return (
      <div key={index}>
        <h1>{question.question}</h1>
        <p>{question.answer}</p>
      </div>
    );
  });

return questions
};*/

function App() {
  return (
    <div className="App">
      <Table rows={useGetAllQuestions()} />
    </div>
  );
}

export default App;
