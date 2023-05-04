import { useState } from 'react';

const USAPhoneNumber = () => {
    //regex for 10 digit number with standard format US phone number format: (XXX) XXX-XXXX
    const phoneRegex = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[ ]?[0-9]{3}[-]?[0-9]{4}$/;

    const [isValid, setValid] = useState();

    //validating phone number with regex to match standard format: (XXX) XXX-XXXX
    const ValidatePhoneNumber = (number) => {
        if (phoneRegex.test(number)) {
            setValid(true);

            //getting 10 digits phone number without brackets, space and hyphen 
            number = number.replace(/\D/g, "")
            console.log(number);
        }
        else {
            setValid(false);
        }
    };

    //phone number masking function that adds round brackets to first 3 digits, followed followed by a nonbreaking space, and then hyphenate the 3 digit exchange code with the 4 digit number
    const phoneMask = (phone) => {
        return phone.replace(/\D/g, '')
            .replace(/^(\d)/, '($1')
            .replace(/^(\(\d{3})(\d)/, '$1) $2')
            .replace(/(\d{3})(\d{1,5})/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    }

    const inputHandler = (event) => {
        event.target.value = phoneMask(event.target.value);
        event.target.value ? ValidatePhoneNumber(event.target.value) : setValid();
    }
    return (
        <div className='block'>
            <h2>USA Phone Number Validation</h2>
            <div className='input-group'>
                <input
                    className='input-box'
                    type="text"
                    name="phone"
                    placeholder="enter phone number"
                    title="10-digit number"
                    data-testid="phone-input"
                    onInput={inputHandler}
                />
                {isValid === true && (
                    <p className='pass error-msg'>Valid</p>
                )}
                {isValid === false && (
                    <p className='fail error-msg'>InValid</p>
                )}
            </div>
        </div>
    )
}

export default USAPhoneNumber;