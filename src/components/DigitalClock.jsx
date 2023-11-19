import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className='box'>
            <h1 className='container mb-4' style={{ color: "#dfe6e9", marginBottom: "1.3rem" }}>Digital Clock</h1>
            <h1>{formatTime(time)}</h1>
        </div>
    );
}

export default DigitalClock;
