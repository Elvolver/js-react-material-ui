import React from "react";
import {makeStyles} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";


const useStyles = makeStyles(theme => ({
    notificator: {
        position: 'absolute',
        minWidth: 10,
        minHeight: 10,
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
        color: 'white',
    }
}));

const GridNotificator = (props) => {
    let classes = useStyles();
    return (
        <div className={classes.notificator}>
            {props.width}
        </div>
    )
}

export default withWidth()(GridNotificator)