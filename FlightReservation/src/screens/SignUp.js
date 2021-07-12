/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';
import CheckBoxField from '../components/form/CheckBoxField';
import colors from '../consts/colors';
import {bool} from 'yup';
import style from './../consts/style';
import {Pressable} from 'react-native';

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
            <View style={{backgroundColor: colors.green}}>
              <Text style={style.title}>Sign Up</Text>
              <View style={style.textField__text}>
                <TextField
                  {...formProps}
                  label="Name"
                  name="name"
                  style={{backgroundColor: colors.orange}}
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
              <View style={{flexDirection: 'row', paddingTop: 20}}>
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 40,
                  }}
                />
                <Pressable
                  disabled={!formProps.isValid || loading}
                  onPress={formProps.handleSubmit}>
                  <View style={style.btn}>
                    <Text style={{color: colors.white, fontSize: 18}}>
                      Sign Up
                    </Text>
                  </View>
                </Pressable>

                <Text
                  style={[
                    style.lower_content_text,
                    {paddingTop: 10, paddingBottom: 10},
                  ]}>
                  or
                </Text>

                <Pressable
                  disabled={!formProps.isValid || loading}
                  onPress={formProps.handleSubmit}>
                  <View style={style.btn}>
                    <Text style={{color: colors.white, fontSize: 18}}>
                      Sign Up with Google
                    </Text>
                  </View>
                </Pressable>

                <View style={style.lower_content_text}>
                  <Text style={{paddingTop: 20}}>
                    Already have an account?
                    <Text
                      style={{color: 'blue'}}
                      onPress={() => navigation.navigate('LogIn')}>
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
