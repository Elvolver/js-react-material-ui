import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SingInContainer from "../pages/SingIn/SignInContainer";


const SignInPageTemplate = (props) => {

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <SingInContainer/>
        </Container>
    );
};

export default SignInPageTemplate;