import React from 'react';
import {AppHeader} from "./components/AppHeader";
import {AppDrawer} from "./components/AppDrawer";
import Container from "@material-ui/core/Container";
import {BrowserRouter, Route} from "react-router-dom";
import AppHomePage from "./components/AppHomePage";
import AppTestPage from "./components/AppTestPage";
import OrderPage from "./components/Order/OrderPage";
import ServicesPage from "./components/ServecesPage";
import {Provider} from "react-redux";
import AddServiceContainer from "./components/AddServiceContainer";
import Box from "@material-ui/core/Box";
import GridNotificator from "./components/utils/GridNotificator";
import AppBottomNavigation from "./components/AppBottomNavigation";


const App = (props) => {

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
                <Provider store={props.store}>
                    <AppHeader toggleDrawer={toggleDrawer}/>
                    <AppDrawer toggleDrawer={toggleDrawer} drawerIsOpen={state.drawerIsOpen}/>
                    <GridNotificator/>
                    <Container maxWidth="md" >
                        <Box component="div" m={1} mt={3}>
                            <Route path='/home' render={() => <AppHomePage/>}/>
                            <Route path='/services' render={() => <ServicesPage/>}/>
                            <Route path='/order' render={() => <OrderPage/>}/>
                            <Route path='/test' render={() => <AppTestPage/>}/>
                            <Route path='/addService' render={() => <AddServiceContainer/>}/>
                        </Box>
                    </Container>
                    <br />
                    <br />
                    <AppBottomNavigation/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
