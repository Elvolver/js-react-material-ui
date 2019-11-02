import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {NavLink} from "react-router-dom";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {makeStyles} from "@material-ui/styles";
import {Extension} from "@material-ui/icons";

export const AppDrawerSideList = (props) => {
    const useStyles = makeStyles({
        list: {
            width: 190,
        },
        fullList: {
            width: 'auto',
        },
    });

    const classes = useStyles();
        return (
            <div
                role="presentation"
                onClick={props.toggleDrawer(false)}
                onKeyDown={props.toggleDrawer(false)}
                className={classes.list}
            >
                <List>
                    <ListItem button key="services" component={NavLink} to="/home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Главная"/>
                    </ListItem>
                    <ListItem button key="services" component={NavLink} to="/services">
                        <ListItemIcon>
                            <ImportContactsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Услуги"/>
                    </ListItem>
                    <ListItem button key="test" component={NavLink} to="/test">
                        <ListItemIcon>
                            <Extension/>
                        </ListItemIcon>
                        <ListItemText primary="Test"/>
                    </ListItem>
                </List>
            </div>
        )
    }
;