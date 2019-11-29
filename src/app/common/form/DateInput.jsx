import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({input: {value, onChange, onBlur}, width, placeholder, meta: {touched, error}, rest}) => {
    return (
        <Form.Field error={touched && !!error}>
            <DatePicker
            {...rest}
            placeholderText={placeholder}
            selected={value ? (Object.prototype.toString.call(value) !== '[object Date]') ? value.toDate() : value : null }
            onChange={onChange} 
            onBlur={(e, val) => onBlur(val)}
            onChangeRaw={(e) => e.preventDefault()}
            />
            {touched && error && <Label color='red'>{error}</Label>}
        </Form.Field>
    );
}

// function convertDateTime(str) {
//     var date = new Date(str),
//     month = ("0" + (date.getMonth() + 1)).slice(-2),
//     day = "0" + (date.getDate()).slice(-2);

//     return [date.getFullYear(), month, day].join("-")
// }

export default DateInput;
