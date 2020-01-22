import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import SignInPageTemplate from "./components/templates/SignInPageTemplate";
import AppWithHeader from "./components/templates/MainPageTemplate";
import { Circle } from 'react-preloaders';
import {compose} from "redux";


const App = (props) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(props.isLoading)
    });

    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={props.store}>
                    <React.Fragment>
                        <Switch>
                            <div>
                                <Route path='/login' render={() => <SignInPageTemplate/>}/>
                                <Route path='/' render={() => <AppWithHeader/>}/>
                            </div>
                        </Switch>
                    </React.Fragment>
                    <Circle customLoading={loading}/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoading: state.app.isLoading
});

export default compose(
    connect(mapStateToProps),
)(App);
