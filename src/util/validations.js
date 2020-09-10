export const validateForm = (name, formData, errors, setErrors, onNext) => {
    const formRules = validations[name];

   const newErrors = { ...errors };

    Object.keys(formRules).forEach(field => {
        const fieldRules = formRules[field];
        const fieldValue = formData[field];

        fieldRules.forEach(entry => {
            if(!entry.rule(fieldValue)) {
                newErrors[field]= entry.message;
            } else {
                newErrors[field]= undefined;
            }
        })
    })

    setErrors(newErrors);

    if(Object.keys(newErrors).filter(key => newErrors[key]).length === 0) {
        onNext();
    }

}

const notEmpty = (value) => value && value.trim() !== '';
const validPhone = (value) => /^\d{10}$/.test(value);
const validEmail = (value) =>  /\S+@\S+\.\S+/.test(value);
const validDate = (value) => /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value);
const validUrl = (value) => /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value);

const currentDate = new Date();
const isNotFutureDate = (value) => {
    const enteredDate = new Date(value);
    return enteredDate.getTime() < currentDate.getTime();
}

const notEmptyMessage = 'Cannot be empty';
const validUrlMessage = 'Please enter a valid URL';

const validations = {
    basicInfo: {
        firstName: [
            {
                rule: notEmpty,
                message: notEmptyMessage,
            }
        ],
        lastName: [
            {
                rule: notEmpty,
                message: notEmptyMessage,
            }
        ],
        email: [
            {
                rule: validEmail,
                message: 'Please enter valid email',
            }
        ],
        mobile: [
            {
                rule: validPhone,
                message: 'Please enter valid phone number'
            }
        ],
        dob: [
            {
                rule: validDate,
                message: 'Please enter valid date'
            },
            {
                rule: isNotFutureDate,
                message: 'Cannot be a future date'
            }
        ],
        city: [
            {
                rule: (option) => option && notEmpty(option.value),
                message: 'Please select city'
            }
        ],
    },
    profInfo: {
        companyName: [
            {
                rule: notEmpty,
                message: notEmptyMessage
            }
        ],
        jobTitle: [
            {
                rule: notEmpty,
                message: notEmptyMessage
            }
        ],
        socialProfileLink1: [
            {
                rule: validUrl,
                message: validUrlMessage
            }
        ],
        socialProfileLink2: [
            {
                rule: validUrl,
                message: validUrlMessage
            }
        ],
        reactRating: [
            {
                rule: notEmpty,
                message: notEmptyMessage
            }
        ],
        summary: [
            {
                rule: notEmpty,
                message: notEmptyMessage
            }
        ]
    }
}

export default validations;