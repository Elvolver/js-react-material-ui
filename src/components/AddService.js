import {Redirect} from "react-router-dom";

import React from 'react';
import MaterialUiForm from "./MaterialUiForm";
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
const AddService = props => {
    const classes = useStyles();
    return (
        <div>
            {props.isSubmitted === false
                ?
                <div>
                    <MaterialUiForm onSubmit={props.onSubmit} classes={classes}/>
                </div>
                :
                <Redirect to='/services'/>}
        </div>
    )
};

export default AddService;
