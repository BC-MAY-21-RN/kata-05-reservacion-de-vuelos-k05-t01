/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, Pressable} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import ButtonForm from '../components/form/ButtonForm';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';
import CheckBoxField from '../components/form/CheckBoxField';
import style from './../consts/style';
import {bool} from 'yup';

const SignUp = function ({navigation}) {
  const [loading, setLoading] = useState(false);
  const [emailInUseError, setEmailInUseError] = useState(false);

  const handleSignIn = values => {
    const {name, email, password} = values;
    setLoading(true);
    signInWithNameEmailAndPassword(name, email, password)
      .then(() => setEmailInUseError(false))
      .catch(() => setEmailInUseError(true))
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView>
      {loading && <Text>Loading...</Text>}
      {emailInUseError && <Text>Email in use. Use a diferent email</Text>}
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: 'Juan',
          email: 'juan1@example.com',
          password: 'Juan123%',
          agreeTerms: true,
        }}
        validateOnMount={true}
        onSubmit={values => handleSignIn(values)}>
        {formProps => (
          <View>
            <View style={style.textFieldView}>
              <Text style={style.title}>Sign Up</Text>
              <View style={style.textField__text}>
                <TextField
                  {...formProps}
                  label="Name"
                  name="name"
                  style={style.textFieldBG}
                />
              </View>
              <View>
                <TextField {...formProps} label="Email" name="email" />
              </View>
              <View>
                <PasswordField
                  {...formProps}
                  title="Password"
                  name="password"
                />
              </View>
            </View>
            <View style={style.inferior_content_container}>
              <View style={style.termsView}>
                <CheckBoxField {...formProps} name="agreeTerms" />
                <Text style={style.lower_content_text}>
                  I agree with the Terms and Privacy Policy. *
                </Text>
              </View>
              <View style={style.termsView}>
                <CheckBoxField {...formProps} name="subscribeForProducts" />
                <Text style={style.lower_content_text}>
                  Subscribe for select product updates.
                </Text>
              </View>
              <View>
                <View style={style.buttons_container} />
                <ButtonForm
                  isValid={formProps.isValid}
                  handleSubmit={formProps.handleSubmit}
                  text="Sign up"
                  loading={loading}
                />
                <Text style={style.lower_content_text}>or</Text>
                <ButtonForm
                  isValid={formProps.isValid}
                  handleSubmit={formProps.handleSubmit}
                  text="Sign Up with Google"
                  loading={loading}
                />
                <View style={style.lower_content_text}>
                  <Text style={style.alreadyTxt}>
                    Already have an account?
                    <Text
                      style={style.account_link}
                      onPress={() => {
                        navigation.navigate('LogIn');
                      }}>
                      {' '}
                      Log in
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
