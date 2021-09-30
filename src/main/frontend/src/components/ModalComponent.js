import React, { useState, useEffect } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
const ModalComponent = ({ open, hide, body, save }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    });

    return (
        <>
            <Modal show={isOpen} onHide={hide}>
                <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hide}>Cancel</Button>
                    {save}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;