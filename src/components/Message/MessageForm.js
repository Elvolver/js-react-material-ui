import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
    },
}));

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


const renderFromHelper = ({touched, error}) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
};

const MessageForm = props => {
    const {handleSubmit, pristine, reset, submitting, classes} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="text"
                   component={renderTextField}
                   label="Текст"
                   className={classes.textField}
            />
            <ButtonGroup variant="contained"
                         color="primary"
                         aria-label="split button"
                         margin="normal"
                         className={classes.buttonGroup}
            >
                <Button color="primary"
                        type="submit"
                        disabled={pristine || submitting}
                >
                    Отправить
                </Button>
            </ButtonGroup>
            <ButtonGroup variant={'text'}
                         margin="normal"
                         className={classes.buttonGroup}
            >
                <Button color="primary"
                        disabled={pristine || submitting}
                        onClick={reset}
                >
                    Очистить
                </Button>
            </ButtonGroup>
        </form>
    )
};

export default reduxForm({
    form: 'MessageForm', // a unique identifier for this form
    validate
})(MessageForm)