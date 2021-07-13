import * as yup from 'yup';

export const logInValidationSchema = yup.object().shape({
    email: yup.string().required('Email Address is Required'),
    password: yup.string().required('Password is Required'),
})