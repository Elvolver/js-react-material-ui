import styles from "./FormsControl.module.css"

import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' + (hasError && styles.error)}>
        <div>
            <textarea {...props} {...input}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
};

export const Input0 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' + (hasError && styles.error)}>
        <div>
            <input {...props} {...input}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
};

export const TextField = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <FormControl className={props.outerClassName} error={hasError}>
        <InputLabel>{props.label}</InputLabel>
        <Input {...props} {...input} />
        {hasError && <FormHelperText id="error-text">{meta.error}</FormHelperText>}
    </FormControl>
};

export const AppInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && (meta.error !== undefined);

    const [labelWidth, setLabelWidth] = React.useState(0);
    const labelRef = React.useRef(null);

    React.useEffect(() => {
        setLabelWidth(labelRef.current.offsetWidth);
    }, []);
    console.log(hasError)
    return (
        <FormControl variant="outlined" error={hasError}>
            <InputLabel ref={labelRef} htmlFor="component-outlined" aria-describedby="component-error-text">
                {props.label}
            </InputLabel>
            <OutlinedInput {...props} {...input}
                           id="component-outlined"
                           labelWidth={labelWidth}
            />
            {hasError && <FormHelperText id="component-error-text">{meta.error}</FormHelperText>}
        </FormControl>
    )
};
