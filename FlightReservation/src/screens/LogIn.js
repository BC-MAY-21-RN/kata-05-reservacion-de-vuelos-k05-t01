/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {logInValidationSchema} from '../schemas/logInSchema';
// import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';
import style from './../consts/style';
import {Pressable} from 'react-native';
import {logInWithEmailAndPassword} from './../helpers/firebaseLogIn';

const LogIn = function ({navigation}) {
  const [loading, setLoading] = useState(false);
  const [emailInUseError, setEmailInUseError] = useState(false);

  //Change the handleSignIn function for the handleLogIn
  const handleLogIn = async values => {
    const {email, password} = values;
    setLoading(true);
    await logInWithEmailAndPassword(email, password).then(response => {
      setEmailInUseError(false);
      setLoading(false);
    });
    // .catch(() => setEmailInUseError(true))
    // .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView>
      {loading && <Text>Loading...</Text>}
      {emailInUseError && <Text>Cannot log in</Text>}

      <Formik
        validationSchema={logInValidationSchema}
        initialValues={{
          email: 'juan1@example.com',
          password: 'Juan123%',
        }}
        validateOnMount={true}
        onSubmit={values => handleLogIn(values)}>
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
              <View style={style.buttons_container} />
              <Pressable
                disabled={!formProps.isValid || loading}
                onPress={formProps.handleSubmit}
                title="Log in">
                <View style={style.btn}>
                  <Text style={style.button_text}>Log In</Text>
                </View>
              </Pressable>

              <Text style={style.lower_content_text}>or</Text>

              <Pressable
                disabled={!formProps.isValid || loading}
                onPress={formProps.handleSubmit}>
                <View style={style.btn}>
                  <Text style={style.button_text}>Log In with Google</Text>
                </View>
              </Pressable>
              <View style={style.lower_content_text}>
                <Text
                  style={style.alreadyTxt}
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  Already have an account?{' '}
                  <Text style={style.account_link}>Sign up</Text>
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
