import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import MessageList from "./MessageList";
import {makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";

const MessagePage = (props) => {

    const useStyles = makeStyles(theme => ({
        group: {
            margin: theme.spacing(1),
        },
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
        },
    }));



    let classes = useStyles();
    return (
        <Box component="div">
            <MessageList messages={props.messages} deleteMessage={props.deleteMessage}/>
            <Fab aria-label='Add' color='primary'
                 className={classes.fab}
                 component={NavLink} to="/addMessage"
            >
                <AddIcon/>
            </Fab>
        </Box>

    )
};

export default MessagePage;

