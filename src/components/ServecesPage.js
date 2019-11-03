import React from 'react';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from "@material-ui/core/Fab";
import {connect} from "react-redux";
import {addService, deleteCheckedServices, onServiceSelect} from "../redux/ServicesReducer";
import ServiceList from "./ServiceLest";
import {makeStyles} from "@material-ui/core";

const ServicesPage = (props) => {

    const useStyles = makeStyles(theme => ({
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

    let classes =  useStyles();

    return (
        <Box component="div" m={5}>
            <Button variant="contained"
                    color="primary"
                className={classes.button}
                    startIcon={<AddIcon/>}
                    onClick={props.addService}

            >
                Добавить услугу
            </Button>
            <Button variant="contained"
                    color="secondary"
                className={classes.button}
                    startIcon={<DeleteIcon/>}
                    disabled={false}
                    onClick={props.deleteCheckedServices}
            >
                Удалить услугу
            </Button>


            <ServiceList services={props.services} onServiceSelect={props.onServiceSelect}/>

            <Fab aria-label='Add' color='primary' className={classes.fab} onClick={props.addService}>
                <AddIcon/>
            </Fab>
        </Box>
    )
};

const mapStateToProps = (state) => ({
    services: state.services.services
});

export default connect(mapStateToProps, {addService, onServiceSelect, deleteCheckedServices})(ServicesPage);

