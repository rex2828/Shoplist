import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
const Filterbar = ({ filterbarChangeHandler }) => {

    const [flocation, setFlocation] = useState('None')
    const [fcategory, setFcategory] = useState('None')
    const [status, setStatus] = useState('None');

    useEffect(() => {
        filterbarChangeHandler(fcategory, flocation, status)
    }, [filterbarChangeHandler, flocation, fcategory, status])

    return (
        <Container className='mt-3 mb-3 p-4 bg-primary rounded'>
            <Row className='d-flex flex-row'>
                <Col>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select size='lg' value={fcategory} onChange={(e) => setFcategory(e.target.value)}>
                            <option>None</option>
                            <option>Grocery</option>
                            <option>Butcher</option>
                            <option>Baker</option>
                            <option>Chemist</option>
                            <option>Stationery</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Select size='lg' value={flocation} onChange={(e) => setFlocation(e.target.value)}>
                            <option>None</option>
                            <option>Thane</option>
                            <option>Pune</option>
                            <option>Mumbai Suburban</option>
                            <option>Nashik</option>
                            <option>Nagpur</option>
                            <option>Ahmednagar</option>
                            <option>Solanpur</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select size='lg' value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>None</option>
                            <option>Open</option>
                            <option>Closed</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}

export default Filterbar