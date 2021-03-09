import { withStyles } from '@material-ui/core';
import React from 'react';
import PTypography from '../Typography/PTypography';
import GoKwik from '../../images/gokwik.png'

function Footer(props) {
    const {classes} = props;

    return (<div className={classes.footer}>
        <PTypography variant={'caption2'} color={'light'} inline>{'Powered by'}</PTypography>&nbsp;
        <img src={GoKwik} className={classes.logo} alt={''}/>
    </div>)
}

export default withStyles(theme => ({
    footer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 38
    },
    logo: {
        height: 16
    }
}))(Footer);