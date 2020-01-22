import React from 'react';
import {connect} from "react-redux";
import {deleteMessage, getMessages} from "../../redux/MessageReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import MessagePage from "./MessagePage";
import {loadingOff, loadingOn} from "../../redux/AppReducer";

class MessageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages
        };
    }

    componentDidMount() {
        this.setState({messages: this.props.getMessages()});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.messages.messages.length !== prevProps.messages.messages.length) {
            this.props.getMessages();
        }
    }

    getMessages = () => {
        this.props.getMessages();
    };

    deleteMessage = (id) => {
        this.props.deleteMessage(id);

    };

    render() {
        return <div>
            <MessagePage messages={this.props.messages} getMessages={this.getMessages} deleteMessage={this.deleteMessage} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

export default compose(
    connect(mapStateToProps, {getMessages, deleteMessage, loadingOn, loadingOff}),
    withRouter
)(MessageContainer);
