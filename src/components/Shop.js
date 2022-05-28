import React from 'react';
import { useDispatch } from 'react-redux';
import { shopActions } from '../store/shop-slice';
import { Card, ListGroup, ListGroupItem, Button, Badge } from 'react-bootstrap';
import { uiActions } from '../store/ui-slice';
const Shop = ({ id, name, location, category, opendate, closedate }) => {
    const dispatch = useDispatch();

    const deleteShopHandler = () => {
        dispatch(shopActions.removeShop(id))
    }

    const editShopHandler = () => {
        dispatch(uiActions.modalVisible(id))
    }

    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title><h2 className='text-light d-flex justify-content-center'>{name}</h2></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className='d-flex justify-content-between'><Badge bg="success">Location</Badge> {location}</ListGroupItem>
                <ListGroupItem className='d-flex justify-content-between'><Badge bg="secondary">Category</Badge>{category}</ListGroupItem>
                <ListGroupItem className='d-flex justify-content-between'><Badge bg="light">Open Date</Badge>{opendate}</ListGroupItem>
                <ListGroupItem className='d-flex justify-content-between'><Badge bg="warning">Close Date</Badge>{closedate}</ListGroupItem>
            </ListGroup>
            <Card.Footer className='d-flex justify-content-around mb-2 rounded'>
                <Button className='btn btn-info' onClick={editShopHandler}>Edit</Button>
                <Button className='btn btn-danger' onClick={deleteShopHandler}>Delete</Button>
            </Card.Footer>
        </Card>
    )
}

export default Shop;