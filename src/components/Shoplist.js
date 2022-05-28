import React, { useCallback, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Filterbar from './Filterbar';
import Shop from './Shop';
import moment from 'moment';

const Shoplist = () => {

    const shoplist = useSelector(state => state.shop.shops)
    const [mappedShops, setMappedShops] = useState([])

    const filterbarChangeHandler = useCallback((category, location, status) => {
        const filteredShops = shoplist.filter((shop) => {
            let currentDate = new Date().toISOString().slice(0, 10)
            const calstatus = moment(currentDate).isBetween(shop.opendate, shop.closedate) ? 'Open' : 'Closed'
            return (shop.location === location || location === 'None') && (shop.category === category || category === 'None') && (calstatus === status || status === 'None')
        });
        setMappedShops(filteredShops.map((shop) => {
            return <Shop key={shop.id} id={shop.id} name={shop.name} location={shop.location} category={shop.category} opendate={shop.opendate} closedate={shop.closedate} />
        }))
    }, [shoplist])


    return (
        <>
            <Filterbar filterbarChangeHandler={filterbarChangeHandler} />
            <Container className='bg-primary rounded p-4 mb-3'>
                {mappedShops.length > 0 && <Row className='d-flex justify-content-center'>{mappedShops}</Row>}
                {mappedShops.length <= 0 && <h1 className='d-flex justify-content-center'>No Shops Found ;\</h1>}
            </Container>
        </>
    )
}

export default Shoplist