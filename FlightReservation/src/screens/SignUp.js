/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import ButtonForm from '../components/form/ButtonForm';
import GoogleButton from '../components/form/GoogleButton';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {onGoogleButtonPress, signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';
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
              <View style={{flexDirection: 'row'}}>
                <CheckBoxField {...formProps} name="subscribeForProducts" />
                <Text style={style.lower_content_text}>
                  Subscribe for select product updates.
                </Text>
              </View>
              <View>
                <View style={style.signUpBtns}/>
                <ButtonForm isValid = {formProps.isValid} handleSubmit = {formProps.handleSubmit} text = "Sign up" loading = {loading}/>
                <Text
                  style={style.lower_content_text}>
                    or
                </Text>
                <GoogleButton onPress = {() => onGoogleButtonPress(navigation)} text = "Sign In with Google"/>
                <View style={style.lower_content_text}>
                  <Text style={style.alreadyTxt}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={()=> {navigation.navigate('LogIn')}}>
                    <Text style={style.logInLink}>Log in</Text>
                  </TouchableOpacity>
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
