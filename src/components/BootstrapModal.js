import React from 'react'
import { Modal } from 'react-bootstrap'
import EditShopForm from './EditShopForm'
const BootstrapModal = ({ show, onClose }) => {

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Shop</Modal.Title>
            </Modal.Header>
            <Modal.Body><EditShopForm onClose={onClose} /></Modal.Body>
        </Modal>
    )
}

export default BootstrapModal;