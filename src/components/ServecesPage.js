import React from 'react';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Fab from "@material-ui/core/Fab";
import {connect} from "react-redux";
import {
    addService,
    deleteAllServices,
    deleteCheckedServices,
    onServiceSelect,
    selectAllServices
} from "../redux/ServicesReducer";
import ServiceList from "./ServiceLest";
import {makeStyles} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import {NavLink} from "react-router-dom";


const ServicesPage = (props) => {

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
            bottom: 70,
            right: 10
        },
    }));

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleClick = () => {
        alert(`You clicked button`);
    };

    const handleMenuItemClick = (event, f) => {
        f();
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    let classes = useStyles();

    return (
        <Box component="div">
            <ButtonGroup variant="contained" color="primary" aria-label="split button" className={classes.group}>
                <Button
                    color="primary"

                    startIcon={<AddIcon/>}
                    component={NavLink} to="/addService"
                >
                    Добавить услугу
                </Button>
            </ButtonGroup>

            <ButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="split button"
                         className={classes.group}>
                <Button startIcon={<DeleteIcon/>} onClick={props.deleteCheckedServices}>Удалить</Button>
                <Button
                    color="secondary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon/>
                </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                            <MenuItem
                                key={'1'}
                                onClick={event => handleMenuItemClick(event, props.deleteAllServices)}
                            >
                                Удалить все услуги
                            </MenuItem>
                            <MenuItem
                                key={1}
                                onClick={event => handleMenuItemClick(event, props.selectAllServices)}
                            >
                                Выделить все услуги
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>

            <ServiceList services={props.services} onServiceSelect={props.onServiceSelect}/>

            <Fab aria-label='Add' color='primary'
                 className={classes.fab}
                 component={NavLink} to="/addService"
            >
                <AddIcon/>
            </Fab>

        </Box>
    )
};

const mapStateToProps = (state) => ({
    services: state.services.services
});

export default connect(mapStateToProps, {addService, onServiceSelect, deleteCheckedServices, deleteAllServices, selectAllServices})(ServicesPage);

