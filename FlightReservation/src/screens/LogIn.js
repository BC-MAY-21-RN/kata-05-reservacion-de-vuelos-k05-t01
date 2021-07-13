/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';
import colors from '../consts/colors';
import style from './../consts/style';
import {Pressable} from 'react-native';

const LogIn = function ({navigation}) {
  const [loading, setLoading] = useState(false);

  const handleSignIn = values => {
    const {email, password} = values;
    setLoading(true);
    signInWithNameEmailAndPassword(email, password)
      .then(() => setEmailInUseError(false))
      .catch(() => setEmailInUseError(true))
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView>
      {loading && <Text>Loading...</Text>}
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
            <View style={style.upper_background}>
              <Text style={style.title}>Log in</Text>
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
                onPress={formProps.handleSubmit}
                title="Log in">
                <View style={style.btn}>
                  <Text style={{color: colors.white, fontSize: 18}}>
                    Log In
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
                    Log In with Google
                  </Text>
                </View>
              </Pressable>
              <View style={style.lower_content_text}>
                <Text style={{paddingTop: 20}}>
                  Already have an account?
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignUp');
                    }}>
                    <Text style={{color: 'blue'}}>Sign up</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
            {/*  */}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LogIn;
