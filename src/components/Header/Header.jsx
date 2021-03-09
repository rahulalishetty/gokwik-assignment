import React from 'react';
import { withStyles } from '@material-ui/core';
import PTypography from '../Typography/PTypography';
import classNames from "classnames";
import Right from '../../images/right.png';
import Left from '../../images/left.png';
import Paytm from '../../images/paytm.png';
import Price from '../../images/price.png';

function Header(props) {
    const { classes } = props;
    
    return (
        <React.Fragment>
            <div className={classes.mainHeader}>
                <div className={classes.main}>
                    <div
                        className={classNames({
                            [classes.title]: true,
                        })}
                    >
                        <PTypography color={'white'} weight={'bold'} variant={'title'}> {'man'} </PTypography>
                    </div>
                    <div 
                        className={classNames({
                            [classes.title]: true,
                            [classes.bottom]: true
                        })}
                    >
                        <PTypography color={'white'} weight={'bold'} variant={'title'}> {'matters'} </PTypography>
                    </div>
                </div>
                <div className={classes.bottomTitle}>
                    <PTypography variant={'gradient'}> {'Congratulations'} </PTypography>
                    <span role="img" aria-label="partying" className={classes.emoji}>🥳</span>    
                </div>
            </div>
            <div className={classes.priceBoxContainer}>
                <div className={classes.priceBox}>
                    <img src={Right} alt={''} className={classes.right}/>
                    <img src={Left} alt={''} className={classes.left}/>
                    <div className={classes.container}>
                        <img src={Paytm} alt={''} className={classes.paytm}/>
                    </div>
                    <div className={classes.container}>
                        <img src={Price} alt={''} className={classes.price}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withStyles(theme => ({
    mainHeader: {
        height: '35vh',
        backgroundColor: '#202A37',
        width: '100%'
    },
    main: {
        height: '10vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '-40px',
        marginTop: '5vh'
    },
    bottom: {
        marginLeft: '40px',
        marginTop: '-18px'
    },
    bottomTitle: {
        height: '12vh',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    emoji: {
        marginLeft: 6,
        fontSize: 20,
        marginTop: 2
    },
    priceBoxContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    priceBox: {
        width: '90%',
        height: '25vh',
        marginTop: '-12.5vh',
        backgroundColor: 'white',
        position: 'relative',
        borderRadius: 20,
        boxShadow: '2px 24px 26px -26px rgba(0,0,0,0.49)',
        overflow: 'hidden'
    },
    right: {
        borderTopRightRadius: 20,
        position: 'absolute',
        right: '-1px',
        top: '-1px',
        height: '10vh',
        width: '10vh'
    },
    left: {
        borderBottomLeftRadius: 20,
        position: 'absolute',
        left: '0px',
        bottom: '-8px',
        height: '8vh',
        width: '8vh',
        borderTopRightRadius: 40
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '11vh'
    },
    paytm: {
        height: '7vh'
    },
    price: {
        height: '8vh'
    }
}))(Header);