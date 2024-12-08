import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms]=useState([])
    useEffect(()=>{
        fetch('rooms.json')
        .then(res=> res.json())
        .then(data=>setRooms(data))
    },[])
    return (
        <div>
            <h1>Rooms : {rooms.length}</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    rooms.map(room=> <div className='border' key={room.Id}>
                        <h1>{room.roomId}</h1>
                        <img src={room.roomImage} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Rooms;