import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";

class AppProfilePage extends React.Component {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        return (<div>
            qweqweqwe<br/>
            {this.props.children}
        </div>)
    }

}

export default compose(
    connect(null, {getProfile}),
    withRouter
)(AppProfilePage);;