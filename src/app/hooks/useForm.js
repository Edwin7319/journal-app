import {useState} from 'react';

export default function useForm(initialState = {}) {

    const [formValues, setFormValues] = useState(initialState);

    const resetForm = (newFormState = initialState) => {
        setFormValues(initialState);
    }

    const formInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    }

    return [
        formValues,
        formInputChange,
        resetForm,
    ];
}