/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const logInValidationSchema = yup.object().shape({
    email: yup.string().required(' *Email address is empty'),
    password: yup.string().required(' *Password is empty'),
});
