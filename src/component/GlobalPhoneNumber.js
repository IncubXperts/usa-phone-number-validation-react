import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const GlobalPhoneNumber = () => {
    const [value, setValue] = useState();

    const handler = (number) => {
        setValue(number);
        if (typeof (number) === 'string') {
            if (isValidPhoneNumber(number)) {
                console.log(number);
            }
        }
    }
    return (
        <div className='block'>
            <h2>Global Phone Number Validation</h2>
            <div className='input-group'>

                <PhoneInput
                    className='input-box'
                    //defaultCountry="US"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={handler}
                />
                {value && isValidPhoneNumber(value) === true && (
                    <p className='pass error-msg'>Valid</p>
                )}
                {value && isValidPhoneNumber(value) === false && (
                    <p className='fail error-msg'>InValid</p>
                )}
                <br></br>
            </div>
        </div>
    )
}

export default GlobalPhoneNumber;