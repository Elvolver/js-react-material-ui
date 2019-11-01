import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {AppDrawerSideList} from "./AppDrawerSideList";




export const AppDrawer = (props) => {
    return (
        <div>
            <Drawer open={props.drawerIsOpen}
                    onClose={props.toggleDrawer(false)}
            >
                <AppDrawerSideList toggleDrawer={props.toggleDrawer}/>
            </Drawer>
        </div>
    )
}