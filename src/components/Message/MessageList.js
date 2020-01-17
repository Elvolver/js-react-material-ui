import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";


const MessageList = (props) => {
    return (
        <div>
            <List>
                {props.messages.messages.map((message, index) => (
                    <div key={index}>
                        <ListItem button>
                            <ListItemText id={message.Id} primary={message.text}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => props.deleteMessage(message.Id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                    </div>
                ))}
            </List>
        </div>
    )
};
export default MessageList;
