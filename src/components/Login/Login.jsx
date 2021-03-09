import React, { useState } from 'react';
import {withStyles} from "@material-ui/core/styles";
import PTypography from '../Typography/PTypography';
import Input from '../Input/Input';
import Button from '../Button/Button';

function  Login(props) {
    const {classes} = props;
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (value) => {
        if(value.length === 10)
            setIsValid(true);
        else 
            setIsValid(false);
        setPhone(value);
    }

    const handleClick = () => {
        if(props.handleLogin) props.handleLogin(phone);
    }

    return (
        <div className={classes.rootContainer}>
            <div className={classes.root}>
                <PTypography variant={'subtitle'} inline>{'You have WON Paytm Gift Card of Rs 200 for'}</PTypography>
                <PTypography weight={'bold'} variant={'subtitle'} inline>{'placing the order on Man Matters'}</PTypography>
            </div>
            <div className={classes.inputbox}>
                <Input handleChange={handleChange}/>
                <Button disabled={!isValid} handleClick={handleClick}/>
            </div>
        </div>
    )
}

export default withStyles(theme => ({
    root: {
        width: '70%',
        textAlign: 'center',
        height: '11vh'
    },
    rootContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '45vh',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inputbox: {
        width: '90%'
    }
}))(Login);