import React, { useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import ModalComponent from './ModalComponent';

const ButtonModalComponent = ({ nameButton, modalBody, modalButtonSave }) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Button onClick={showModal}>{nameButton ? nameButton : 'Display Modal'}</Button>
            <ModalComponent open={isOpen} hide={hideModal} body={modalBody} save={modalButtonSave}/>
        </>
    );
}

export default ButtonModalComponent;