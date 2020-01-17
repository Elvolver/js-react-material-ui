import React from 'react'
import {Field, reduxForm} from 'redux-form'
import asyncValidate from './asyncValidate'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";


const validate = values => {
    const errors = {};
    const requiredFields = [
        'asd',
        'title',
        'description',
        'duration'

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

const RenderTextField = (props) => {

    return (
        <TextField
            className={props.className}
            label={props.label}
            placeholder={props.label}
            error={props.meta.touched && props.meta.invalid}
            helperText={props.meta.touched && props.meta.error}
            {...props.input}
            {...props.custom}
        />
    )
};



const MaterialUiForm = props => {
    const {handleSubmit, pristine, reset, submitting, classes} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={4}>
                    <Field name="title"
                           component={RenderTextField}
                           label="Название"
                           className={classes.textField}
                           rows={1}
                           rowsMax={10}
                           multiline={true}
                    />
                </Grid>
                <Grid item xs={12}
                      sm={12}
                      md={8}
                      lg={8}
                      xl={8}>
                    <Field row name="description"
                           component={RenderTextField}
                           label="Описание"
                           className={classes.textField}
                           rows={1}
                           rowsMax={10}
                           multiline={true}
                    />
                </Grid>
                <Grid item xs={12}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={4}>
                    <Field row name="duration"
                           component={RenderTextField}
                           label="Длительность"
                           className={classes.textField}
                    />
                </Grid>
                <Grid item item xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}>
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
                </Grid>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    validate,
    asyncValidate
})(MaterialUiForm)