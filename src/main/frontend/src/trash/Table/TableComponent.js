import React from "react";

import '../../App.css';

import { Button, Table } from 'react-bootstrap';

export default function TableComponent(props) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    {
                        props.cols.map((col) => {
                            return <th>{col.name}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.questions.map((row) => {
                        return <tr>
                            <td>{row.id}</td>
                            <td>{row.question}</td>
                            <td>{row.answer}</td>
                            <td><Button variant="primary" className="custom-btn">Boton</Button></td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    );
}
