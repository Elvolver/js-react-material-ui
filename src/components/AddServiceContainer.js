import React, {useState} from "react";
import {addService} from "../redux/ServicesReducer";
import {connect} from "react-redux";
import AddService from "./AddService";



const AddServiceContainer = props => {

    let [isSubmitted, setSubmitted] = useState(false);

    const onSubmit = (formData) => {
        props.addService(formData.title, formData.description);
        setSubmitted(true);
    };

    return <AddService onSubmit={onSubmit} isSubmitted={isSubmitted}/>
};

export default connect(null, {addService})(AddServiceContainer);