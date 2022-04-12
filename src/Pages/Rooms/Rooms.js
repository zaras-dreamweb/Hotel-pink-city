import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='text-5xl font-extrabold mt-10 pb-10 text-pink-600 text-center'>Hotel Pink City</h1>
            <div className="rooms-container grid gap-4 grid-cols-1 md:grid-cols-3">
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;