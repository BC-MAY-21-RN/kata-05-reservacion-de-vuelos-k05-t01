import React from 'react';
import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Log in',
    signup: 'Sign up',
    signinGoogle: 'Sign in with Google',
    signingUp: 'Signing up...',
    signedUp: 'Signed Up!',
    loading: 'Loading...',
    emailUsed: 'Email in use. Use a different email',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    terms: 'I agree with the Terms and Privacy Policy. *',
    productUpdates: 'Subscribe for select product updates.',
    or: 'or',
    alreadyAccount: 'Already have an account?',
    dontAccount: 'Do not have an account?',
    from: 'Where are you now?',
    to: 'Where will you be flying to?',
    date: 'Select date',
    next: 'Next',
    finish: 'Finish',
    startDate: 'Selected start date: ',
    endDate: 'Selected end date: ',
    passenger: 'How many passengers?',
    request: 'Your request was received.',
  },
};

const Span = ({text}) => I18n.t(text);
export const span = text => I18n.t(text);

export default Span;
