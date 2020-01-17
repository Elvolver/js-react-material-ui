import React, {useState} from "react";
import {addMessage} from "../../redux/MessageReducer";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";

const AddMessageContainer = props => {

    let [isSubmitted, setSubmitted] = useState(false);

    const onSubmit = (formData) => {
        props.addMessage(formData.text);
        setSubmitted(true);
    };

    return <AddMessage onSubmit={onSubmit} isSubmitted={isSubmitted}/>
};

export default connect(null, {addMessage})(AddMessageContainer);