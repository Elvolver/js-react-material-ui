import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import asyncValidate from './asyncValidate'
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
        'title',
        'description'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательно'
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Некорректный Email'
    }
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

const MaterialUiForm = props => {
    const {handleSubmit, pristine, reset, submitting, classes} = props;
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <Field name="title"
                   component={renderTextField}
                   label="Название"
                   className={classes.textField}
            />
            <Field name="description"
                   component={renderTextField}
                   label="Описание"
                   className={classes.textField}
                   fullWidth
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
                    Добавить услугу
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
}

export default reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    validate,
    asyncValidate
})(MaterialUiForm)