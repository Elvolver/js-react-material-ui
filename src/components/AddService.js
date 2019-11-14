import {Redirect} from "react-router-dom";

import React from 'react';
import {makeStyles} from "@material-ui/core";
import MaterialUiForm from "./MaterialUiForm";

const useStyles = makeStyles(theme => ({
    buttonGroup: {

    },
    textField: {
       width: '100%'
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
