import React, { useState, useEffect } from 'react';
import GiftCard from '../GiftCard/GiftCard';
import Login from '../Login/Login';

function Body(props) {
    const [login, setLogin] = useState(true);

    useEffect(() => {
        const phone = localStorage.getItem('phone');
        if(phone) {
            setLogin(false);
        }
    }, []);

    const handleLogin = (value) => {
        setLogin(false);
        localStorage.setItem('phone', value);
    }

    return (
        login ? <Login handleLogin={handleLogin}/> : <GiftCard />
    )
}

export default Body;