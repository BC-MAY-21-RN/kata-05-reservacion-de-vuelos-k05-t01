const I18n = require('react-native-i18n').default

I18n.fallbacks = true;
 
I18n.translations = {
  en: {
      login: 'Log in',
      signup: 'Sign up',
      signupGoogle: 'Sign up with Google',
      loading: 'Loading...',
      emailUsed: 'Email in use. Use a diferent email',
      name: 'Name',
      email: 'Email',
      password: 'Password',
      terms: 'I agree with the Terms and Privacy Policy. *',
      productUpdates: 'Subscribe for select product updates.',
      or: 'or',
      alreadyAccount: 'Already have an account?',
  }
};

export default I18n;
