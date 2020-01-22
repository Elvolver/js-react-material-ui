import React from "react"
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (localStorage.getItem("token") === null) return <Redirect to={"/login"} />;
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent
};

export default withAuthRedirect;