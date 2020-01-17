import {Redirect} from "react-router-dom";

import React from 'react';
import MessageForm from "./MessageForm";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    buttonGroup: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(3)
    },
    textField: {
        margin: theme.spacing(1),
    },
}));
const AddMessage = props => {
    const classes = useStyles();
    return (
        <div>
            {props.isSubmitted === false
                ?
                <div>
                    <MessageForm onSubmit={props.onSubmit} classes={classes}/>
                </div>
                :
                <Redirect to='/messages'/>}
        </div>
    )
};

export default AddMessage;
