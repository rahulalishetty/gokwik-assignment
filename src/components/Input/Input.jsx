import React, { useState } from 'react';
import {withStyles} from "@material-ui/core/styles";
import PTypography from '../Typography/PTypography';

function Input(props) {
    const {classes} = props;
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        let newValue = e.target.value;
        if(newValue.length <= 10){
            setValue(newValue);
            setIsValid(false);
            if(props.handleChange) props.handleChange(newValue);
        }
        if(newValue.length === 10){
            setIsValid(true);
        }
    }
    const handlePress = (e) => {
        if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)){
            e.preventDefault();
        }
    }
    console.log('aslkdjfklasjla: ', value);
    return (
        <div className={classes.root}>
            <input 
                type="number" 
                id="phone" 
                name="phone" 
                placeholder={'Enter Mobile Number'} 
                pattern="[0-9]{10}" 
                className={classes.input} 
                onChange={handleChange}
                onKeyPress={handlePress}
                value={value}
            />
            <div className={classes.label}>
                {isValid ? ' ' : <PTypography variant={'caption'}>{'Enter the same number used on Man Matters'}</PTypography>}
            </div>
        </div>
    )
}

export default withStyles(theme => ({
    root: {
        height: '11vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    label: {
        height: 24,
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        borderRadius: 60,
        border: 'none',
        backgroundColor: '#F5F6F9',
        height: 54,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 2,
        fontWeight: 500,
        outline: 'none',
        '&::-webkit-input-placeholder': {
            fontSize: 12,
            color: '#C9C9C9',
            fontWeight: 500
        },
        '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '-moz-appearance': 'textfield'
    }
}))(Input);