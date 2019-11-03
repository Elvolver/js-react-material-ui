import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";

const ServiceList = (props) => {
    debugger
    return (
        <div>
            <List>
                {props.services.map((service, index) => (
                    <div key={index}>
                        <ListItem button>
                            <Checkbox
                                checked={service.checked}
                                onChange={(event, isInputChecked, id) => props.onServiceSelect(event, isInputChecked, service.id)}
                            />
                            <ListItemText id={service.name} primary={service.name} secondary={service.description}/>
                        </ListItem>
                        <Divider/>
                    </div>
                ))}
            </List>
        </div>
    )
};
export default ServiceList;