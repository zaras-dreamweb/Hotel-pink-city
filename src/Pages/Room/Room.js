import React from 'react';
import { Card } from 'react-bootstrap';
import './Room.css'

const Room = ({ room }) => {
    const { name, price, rating, image } = room;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><strong>Price:</strong> ${price}</p>
                        <p><strong>Rating:</strong> {rating}</p>
                    </Card.Text>
                    <button className='btn-btn'>Book</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Room;