/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {logInValidationSchema} from '../schemas/logInSchema';
import {signInWithNameEmailAndPassword} from '../helpers/firebaseSignUp';
import style from './../consts/style';
import {Pressable} from 'react-native';
import I18n from '../consts/i18n/en';


const LogIn = function ({navigation}) {
  const [loading, setLoading] = useState(false);

  //Change the handleSignIn function for the handleLogIn
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
      {loading && <Text>{I18n.t('loading')}</Text>}
      <Formik
        validationSchema={logInValidationSchema}
        initialValues={{
          email: 'juan1@example.com',
          password: 'Juan123%',
        }}
        validateOnMount={true}
        onSubmit={values => handleSignIn(values)}>
        {formProps => (
          <View>
            <View style={style.upper_background}>
              <Text style={style.title}>{I18n.t('login')}</Text>
              <View>
                <TextField {...formProps} label={I18n.t('email')} name="email" />
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
                  <Text style={style.button_text}>{I18n.t('login')}</Text>
                </View>
              </Pressable>
              <Text style={style.lower_content_text}>{I18n.t('or')}</Text>
              <Pressable
                disabled={!formProps.isValid || loading}
                onPress={formProps.handleSubmit}>
                <View style={style.btn}>
                  <Text style={style.button_text}>{I18n.t('loginGoogle')}</Text>
                </View>
              </Pressable>
              <View style={style.lower_content_text}>
                <Text
                  style={style.alreadyTxt}
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  {I18n.t('dontAccount')}{' '}
                  <Text style={style.account_link}>{I18n.t('signup')}</Text>
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
