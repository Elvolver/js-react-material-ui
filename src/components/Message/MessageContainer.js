import React from 'react';
import {connect} from "react-redux";
import {deleteMessage, getMessages} from "../../redux/MessageReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import MessagePage from "./MessagePage";

class MessageContainer extends React.Component {

    state = {
        messages: {}
    };

    componentDidMount() {
        this.setState({messages: this.props.getMessages()});
    }

    componentDidUpdate(prevProps) {
        if (this.props.messages.messages.length !== prevProps.messages.messages.length) {
            let messages = this.props.getMessages();
            if (messages !== prevProps.messages) {
                this.props.getMessages();
            }
        }
    }

    deleteMessage = (id) => {
        this.props.deleteMessage(id);
        this.setState({messages: this.props.getMessages()});

    }

    render() {
        return <div>
            <MessagePage messages={this.props.messages} getMessages={getMessages} deleteMessage={this.deleteMessage} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
};

export default compose(
    connect(mapStateToProps, {getMessages, deleteMessage}),
    withRouter
)(MessageContainer);
