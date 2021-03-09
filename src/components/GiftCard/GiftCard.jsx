import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import GiftInfo from '../GiftInfo/GiftInfo';
import WattsApp from '../../images/watts.png';
import Remove from '../../images/remove.png';
import Box from '../../images/box.png';

function GiftCard(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <GiftInfo
                    img={WattsApp}
                    head={'Where will i get the gift card?'} 
                    desc={'You will receive it on Whatsapp/SMS on your mobile.'}
                />
            </div>
            <div className={classes.container}>
                <GiftInfo
                    img={Box}
                    head={'When will i receive the gift card?'} 
                    desc={'Within 48 hours, when your Man Matters order is delivered.'}
                />
            </div>
            <div className={classes.container}>
                <GiftInfo
                    img={Remove}
                    head={'What if i cancel the order?'} 
                    desc={'The voucher will not delivered if you cancel the order'}
                />
            </div>
        </div>
    );
}

export default withStyles(theme => ({
    root: {
        height: '48vh'
    },
    container: {
        height: '16vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}))(GiftCard);