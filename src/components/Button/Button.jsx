import { withStyles } from '@material-ui/core';
import React from 'react';
import PTypography from '../Typography/PTypography';

function Button(props){
    const {classes, disabled, handleClick} = props;

    return (<div className={classes.buttonContainer}>
        <button className={classes.button} disabled={disabled} onClick={handleClick}>
            <PTypography variant={'subtitle2'} color={'white'} weight={'bold'}>{'Wow! Get my Paytm Gift Card >'}</PTypography>
        </button>
    </div>);
}

export default withStyles(theme => ({
    buttonContainer: {
        height: '14vh',
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        height: 54,
        width: '100%',
        border: 'none',
        outline: 'none',
        borderRadius: 60,
        backgroundColor: '#009FE3',
        boxShadow: '-3px 31px 27px -22px #009FE3',
        '&:hover': {
            boxShadow: '1px 18px 25px -15px #009FE3',
            cursor: 'pointer'
        },
        '&:disabled': {
            backgroundColor: '#C9C9C9',
            cursor: 'not-allowed'
        }
    }
}))(Button);