import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Extension from '@material-ui/icons/Extension';
import makeStyles from "@material-ui/styles/makeStyles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
});

const AppBottomNavigation = props => {

    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="home" icon={<HomeIcon/>} component={NavLink} to={'/home'} />
            <BottomNavigationAction value="services" icon={<ImportContactsIcon/>} component={NavLink} to={'/services'} />
            <BottomNavigationAction value="order" icon={<Extension/>} component={NavLink} to={'/order'} />
        </BottomNavigation>
    )
};

export default AppBottomNavigation;