import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import PTypography from '../Typography/PTypography';

function GiftInfo(props) {
    const {classes, desc, head, img} = props;

    return (<React.Fragment>
        <div className={classes.head}>
            <div className={classes.grid}></div>
            <PTypography variant={'subtitle2'} weight={'bold'}>{head}</PTypography>
        </div>
        <div className={classes.content}>
            <div className={classes.img}>
                <img src={img} className={classes.image} alt={''}/>
            </div>
            <div className={classes.desc}>
                <PTypography variant={'subtitle2'} >{desc}</PTypography>
            </div>
        </div>
    </React.Fragment>);
}

export default withStyles(theme => ({
    head: {
        height: '6vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: '100%'
    },
    content: {
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    img: {
        width: '14%',
        display: 'flex',
        justifyContent: 'center'
    },
    grid: {
        width: '14%'
    },
    desc: {
        width: '70%'
    },
    image: {
        height: '5vh'
    }
}))(GiftInfo);