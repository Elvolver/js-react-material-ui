import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Fab from "@material-ui/core/Fab";
import {connect} from "react-redux";
import {addService} from "../redux/ServicesReducer";
import ServiceList from "./ServiceLest";

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


const ServicesPage = (props) => {

    const classes = useStyles();

    return (
        <Box component="div" m={5}>
            <Button variant="contained"
                     color="primary"
                     className={classes.button}
                     startIcon={<AddIcon/>}
                     onClick={addService}

            >
                Добавить элемент
            </Button>
            <Button variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    disabled={false}
            >

                Удалить элемент
            </Button>
            <Button variant="contained"
                    className={classes.button}
                    startIcon={<YouTubeIcon />}
                    disabled={false}
                    href="https://youtube.com"
                    target="_blank"
            >

                YouTube
            </Button>

            <ServiceList services={props.services} onServiceSelect={props.onServiceSelect}/>

            <Fab aria-label='Add' color='primary' className={classes.fab}>
                <AddIcon />
            </Fab>
        </Box>
    )
};

const mapStateToProps = (state) => ({
    services: state.services.services
});

const mapDispatchToProps = (dispatch) => ({
    addService: () => dispatch(addService())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);

