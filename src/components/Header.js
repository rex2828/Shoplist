import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { uiActions } from '../store/ui-slice';
import { useDispatch } from 'react-redux';

const Header = ({ formOpen }) => {
    const dispatch = useDispatch()
    const toggleFormHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Shoplist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Button type="button" onClick={toggleFormHandler}>{formOpen ? 'Collapse Form' : 'Show Form'}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header