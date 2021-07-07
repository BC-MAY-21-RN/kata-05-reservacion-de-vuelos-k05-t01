import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min}`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  agreeTerms: yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
  subscribeForProducts: yup.bool().oneOf([true, false]),
});
