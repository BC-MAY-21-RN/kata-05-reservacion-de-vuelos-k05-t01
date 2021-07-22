import I18n from 'react-native-i18n';
import React from 'react';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Log in',
    signup: 'Sign up',
    signinGoogle: 'Sign in with Google',
    loading: 'Loading...',
    emailUsed: 'Email in use. Use a different email',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    terms: 'I agree with the Terms and Privacy Policy. *',
    productUpdates: 'Subscribe for select product updates.',
    or: 'or',
    alreadyAccount: 'Already have an account? ',
    dontAccount: 'Do not have an account? ',
  },
};

const Span = ({text}) => I18n.t(text);
export const span = text => I18n.t(text);

export default Span;
