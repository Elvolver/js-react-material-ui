import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import SingInForm from "../../forms/SingInForm";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";
import {signIn} from "../../../redux/AuthReduser";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const SignInContainer = (props) => {
    const classes = useStyles();
    let [isSubmitted, setSubmitted] = useState(false);

    const onSubmit = (formData) => {
        props.signIn(formData.username, formData.password);
        setSubmitted(true);
    };

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Вход
            </Typography>
            {isSubmitted === false
                ?
                <div>
                    <SingInForm onSubmit={onSubmit} isSubmitted={isSubmitted}/>
                </div>
                :
                <Redirect to='/'/>}
        </div>
    )
};

export default connect(null, {signIn})(SignInContainer);