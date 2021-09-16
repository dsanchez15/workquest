import React from "react";

export default function Table(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Titulo One</th>
                        <th>Titulo Two</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows.questions.map((row) => {
                            return <tr>
                                <td>{row.question}</td>
                                <td>{row.answer}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

