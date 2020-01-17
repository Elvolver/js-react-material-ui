import {KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";

const TimePicker = (props) => {

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardTimePicker
                    margin="normal"
                    id="duration"
                    label="Продолжительность"
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    ampm={false}
                    minutesStep={5}
                    openTo={'minutes'}
                    cancelLabel={'Отмена'}
                    okLabel={'СОХРАНИТЬ'}
                    error={props.meta.touched && props.meta.invalid}
                    helperText={props.meta.touched && props.meta.error}
                    {...props.input}
                    {...props.custom}


                />
            </MuiPickersUtilsProvider>

        )
    }
;

export default TimePicker;