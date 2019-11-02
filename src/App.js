import React from 'react';
import {AppHeader} from "./components/AppHeader";
import {AppDrawer} from "./components/AppDrawer";
import Container from "@material-ui/core/Container";
import {BrowserRouter, Route} from "react-router-dom";
import AppHomePage from "./components/AppHomePage";
import AppServicePage from "./components/Services/AppServicesPage";
import AppTestPage from "./components/AppTestPage";


const App = () => {

    const [state, setState] = React.useState({
        drawerIsOpen: false
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, drawerIsOpen: open});
    };

    return (
        <div className="App">
            <BrowserRouter>
                <AppHeader toggleDrawer={toggleDrawer}/>
                <AppDrawer toggleDrawer={toggleDrawer} drawerIsOpen={state.drawerIsOpen}/>
                <Container maxWidth="md">
                    <Route path='/home' render={() => <AppHomePage/>}/>
                    <Route path='/services' render={() => <AppServicePage/>}/>
                    <Route path='/test' render={() => <AppTestPage/>}/>
                </Container>
            </BrowserRouter>
        </div>
    );
};

export default App;
