import React from 'react';
import {Field, reduxForm} from 'redux-form'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const renderTextField = ({
                             label,
                             input,
                             meta: {touched, invalid, error},
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const renderControlLabel = () => (
    <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Запомнить меня"
    />
);

const validate = values => {
    const errors = {};
    const requiredFields = [
        'text'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательно'
        }
    });
    return errors
};

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SingInForm = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, reset, submitting} = props;

    return(
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Field
                component={renderTextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Имя пользователя"
                name="username"
                autoFocus
            />
            <Field
                component={renderTextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Field
                component={renderControlLabel}/>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Войти
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Забыли пароль?
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        {"Впервые на сайте? Зарегистрируйтесь"}
                    </Link>
                </Grid>
            </Grid>

        </form>
    )
};

export default reduxForm({
    form: 'SingInForm', // a unique identifier for this form
    validate
})(SingInForm)