import {AppHeader} from "../AppHeader";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppProfilePage from "../Profile/AppProfilePage";
import AppHomePage from "../AppHomePage";
import ServicesPage from "../ServecesPage";
import OrderPage from "../Order/OrderPage";
import MessageContainer from "../Message/MessageContainer";
import AppTestPage from "../AppTestPage";
import AddServiceContainer from "../AddServiceContainer";
import AddMessageContainer from "../Message/AddMessageContainer";
import {Route} from "react-router-dom";
import React from "react";
import {AppDrawer} from "../AppDrawer";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const MainPageTemplate = (props) => {

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
        <div>
            <AppHeader toggleDrawer={toggleDrawer}/>

            <AppDrawer toggleDrawer={toggleDrawer} drawerIsOpen={state.drawerIsOpen}/>
            <Container maxWidth="md">
                <Box component="div" m={1}>
                    <Route path='/profile' render={() => <AppProfilePage/>}/>
                    <Route path='/home' render={() => <AppHomePage/>}/>
                    <Route path='/services' render={() => <ServicesPage/>}/>
                    <Route path='/order' render={() => <OrderPage/>}/>
                    <Route path='/messages' render={() => <MessageContainer/>}/>
                    <Route path='/test' render={() => <AppTestPage/>}/>
                    <Route path='/addService' render={() => <AddServiceContainer/>}/>
                    <Route path='/addMessage' render={() => <AddMessageContainer/>}/>
                </Box>
            </Container>
        </div>
    );
};

export default compose(withAuthRedirect)(MainPageTemplate);