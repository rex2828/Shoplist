import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopActions } from '../store/shop-slice';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { uiActions } from '../store/ui-slice';

const EditShopForm = (props) => {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [location, setLocation] = useState('Thane');
    const [category, setCategory] = useState('Grocery');
    const [opendate, setOpendate] = useState('');
    const [isOpendateValid, setIsOpendateValid] = useState(true);
    const [closedate, setClosedate] = useState('');
    const [isClosedateValid, setIsClosedateValid] = useState(true);

    const editId = useSelector(state => state.ui.modal.id)
    const shoplist = useSelector(state => state.shop.shops)
    const dispatch = useDispatch();

    useEffect(() => {
        const shop = shoplist.find(shop => shop.id === editId)
        if (shop) {
            setName(shop.name)
            setCategory(shop.category)
            setLocation(shop.location)
            setOpendate(shop.opendate)
            setClosedate(shop.closedate)
        }
    }, [shoplist, editId])

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setIsNameValid(true);
        setIsClosedateValid(true);
        setIsOpendateValid(true);

        if (!(/^[a-zA-Z]+$/.test(name)) && name.trim().length <= 0) {
            setIsNameValid(false);
            return;
        }
        const parsedOpeningDate = moment(opendate)
        const parsedClosingDate = moment(closedate)

        if (!parsedOpeningDate.isValid()) {
            setIsOpendateValid(false)
            return;
        }

        if (!parsedClosingDate.isValid()) {
            setIsClosedateValid(false)
            return;
        }

        if (parsedClosingDate.diff(parsedOpeningDate, 'days') <= 0) {
            setIsOpendateValid(false)
            setIsClosedateValid(false)
            return;
        }
        const newShop = {
            id: uuid().slice(0, 8),
            name,
            location,
            category,
            opendate,
            closedate
        }
        dispatch(shopActions.removeShop(editId))
        dispatch(shopActions.addShop(newShop))
        dispatch(uiActions.modalVisible(''))
        setName('')
        setOpendate('')
        setClosedate('')
        setCategory('Grocery')
        setLocation('Thane')
    }

    return (
        <Container>
            <Row xl="6" lg="8" className="justify-content-center">
                <Col xl="10" lg="8" className="mt-3 mb-3 pb-2 bg-primary rounded">
                    <Form className='d-flex flex-column justify-content-center' onSubmit={formSubmitHandler}>
                        <Form.Group>
                            <Form.Label>Shop Name</Form.Label>
                            <Form.Control size='lg' type="text" placeholder="Shop Name" value={name} onChange={(e) => setName(e.target.value)} isInvalid={!isNameValid} />
                            {!isNameValid && <p className='text-danger'>Shop Name must contain only English alphabets and can not be empty</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Select size='lg' value={location} onChange={(e) => setLocation(e.target.value)}>
                                <option>Thane</option>
                                <option>Pune</option>
                                <option>Mumbai Suburban</option>
                                <option>Nashik</option>
                                <option>Nagpur</option>
                                <option>Ahmednagar</option>
                                <option>Solanpur</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Select size='lg' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Grocery</option>
                                <option>Butcher</option>
                                <option>Baker</option>
                                <option>Chemist</option>
                                <option>Stationery</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Opening Date</Form.Label>
                            <Form.Control size='lg' type="date" name="Opening date" placeholder="Opening date" value={opendate} onChange={(e) => setOpendate(e.target.value)} isInvalid={!isOpendateValid} />
                            {!isOpendateValid && <p className='text-danger'>Opening Date is required and must be less than closing date</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Closing Date</Form.Label>
                            <Form.Control size='lg' type="date" name="Closing date" placeholder="Closing date" value={closedate} onChange={(e) => setClosedate(e.target.value)} isInvalid={!isClosedateValid} />
                            {!isClosedateValid && <p className='text-danger'>Closing Date is required and must be more than opening date</p>}
                        </Form.Group>

                        <Button type="submit" className='btn-info mt-3'>Save Changes</Button>
                        <Button type="button" className='btn-danger mt-3' onClick={props.onClose}>Close</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditShopForm