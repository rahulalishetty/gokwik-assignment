import React from 'react';
import { Typography } from '@material-ui/core';
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";

function PTypography(props){
    const {classes, variant, color, children, weight, inline} = props;
    console.log('adjfkla; ', inline);
    return (<Typography
        className={classNames({
            [classes.title]: variant === 'title',
            [classes.gradient]: variant === 'gradient',
            [classes.white]: color === 'white',
            [classes.light]: color === 'light',
            [classes.bold]: weight === 'bold',
            [classes.subtitle]: variant === 'subtitle',
            [classes.subtitle2]: variant === 'subtitle2',
            [classes.caption]: variant === 'caption',
            [classes.caption2]: variant === 'caption2',
            [classes.light]: color === 'light',
            [classes.inline]: inline
        })}
    > {children} </Typography>)
}

export default withStyles((theme) => ({
    title: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24
    },
    gradient: {
        fontSize: 20,
        fontWeight: 700,
        backgroundImage: 'linear-gradient(to right, #D162C9, #FFCB36)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    },
    caption: {
        fontSize: 10,
        fontWeight: 300
    },
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 700
    },
    subtitle: {
        fontSize: 14
    },
    subtitle2: {
        fontSize: 12
    },
    caption2: {
        fontSize: 10
    },
    light: {
        color: '#C9C9C9'
    },
    inline: {
        display: 'inline'
    }
}))(PTypography)