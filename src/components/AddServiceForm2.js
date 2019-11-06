import {Field, reduxForm} from "redux-form";
import {maxLength10, maxLength255, required} from "./utils/validadators/validators";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {TextField} from "./common/FormsControl";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
    },
}));

const AddServiceForm2 = props => {
    const classes = useStyles();
    debugger
    return <form onSubmit={props.handleSubmit}>

        <Field component={TextField}
               name={"name"}
               label={"Название"}
               validate={[required, maxLength10]}
        />
        <Field component={TextField}
               name={"description"}
               label={"Описание"}
               validate={[required, maxLength255]}
        />
        <ButtonGroup variant="contained"
                     color="primary"
                     aria-label="split button"
                     className={classes.group}>
            <Button color="primary"
                    type="submit"
                >
                Добавить услугу
            </Button>
        </ButtonGroup>
    </form>;
};

export default reduxForm({touchOnChange: true, touchOnBlur: true, form: 'addService2'})(AddServiceForm2);