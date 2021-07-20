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
import Span from '../consts/i18n/en';

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
  };

  return (
    <SafeAreaView>
      {loading && (
        <Text>
          <Span text="loading" />
        </Text>
      )}
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
              <Text style={style.title}>
                <Span text="login" />
              </Text>
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
                  <Text style={style.button_text}>
                    <Span text="login" />
                  </Text>
                </View>
              </Pressable>
              <Text style={style.lower_content_text}>
                <Span text="or" />
              </Text>
              <Pressable
                disabled={!formProps.isValid || loading}
                onPress={formProps.handleSubmit}>
                <View style={style.btn}>
                  <Text style={style.button_text}>
                    <Span text="loginGoogle" />
                  </Text>
                </View>
              </Pressable>
              <View style={style.lower_content_text}>
                <Text
                  style={style.alreadyTxt}
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Span text="dontAccount" />
                  <Text style={style.account_link}>
                    <Span text="signup" />
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LogIn;
