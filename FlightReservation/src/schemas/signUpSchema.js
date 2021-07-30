/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required(' *Name is required'),
  email: yup.string().required(' *Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => ` *Password must be at least ${min}`)
    .required(' *Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      ' *Invalid password',
    ),
  agreeTerms: yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});
