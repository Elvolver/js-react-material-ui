import React from "react";
import {AppInput} from "./common/FormsControl";
import {maxLength10, maxLength255, required} from "./utils/validadators/validators";
import {Field, reduxForm} from "redux-form";

const AddServiceForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={AppInput}
                   name={"name"}
                   label={"Название"}
                   validate={[required, maxLength10]}
            />
            <Field component={AppInput}
                   name={"description"}
                   label={"Описание"}
                   validate={[required, maxLength255]}
            />
            <button>Добавить услугу</button>
        </form>
    )
};

export default reduxForm({
    touchOnChange: true,
    touchOnBlur: true,
    form: 'addService'
})(AddServiceForm);