export const questions = [
    {
        id: 1,
        question: "Que es java",
        answer: "Un lenguaje de programacion"
    },
    {
        id: 2,
        question: "Que es un map en Java",
        answer: "Es una estructura de datos de tipo clave valor."
    },
    {
        id: 3,
        question: "Una caudal del siguiente error en Git: src refspec main does not match any",
        answer: "Puede ser porque se esta intentando hacer push de una rama nueva que no tiene commits. Utilizar primero git status apra verificar si hay commits a subir."
    },
    {
        id: 4,
        question: "Que es",
        answer: "Un lenguaje"
    }
];

export const columnsQuestions = [
    {
        name: 'Id',
        selector: 'id',
        sortable: true
    },
    {
        name: 'Question',
        selector: 'question',
        sortable: true
    },
    {
        name: 'Answer',
        selector: 'answer',
        sortable: true
    },
    {
        name: 'Actions',
        selector: 'action'
    }
];