/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import {logInValidationSchema} from '../schemas/logInSchema';
import {onGoogleButtonPress} from '../helpers/firebaseSignUp';
import style from './../consts/style';
import {Pressable} from 'react-native';
import {logInWithEmailAndPassword} from './../helpers/firebaseLogIn';
import Span, {span} from '../consts/i18n/en';
import ButtonForm from '../components/form/ButtonForm';
import ArrowBack from '../components/booking/ArrowBack';
import ScreenGreenTitle from '../components/screenConsts/ScreenGreenTitle';

const LogIn = function ({navigation}) {
  const [authError, setAuthError] = useState(false);

  const handleLogIn = async values => {
    const {email, password} = values;
    await logInWithEmailAndPassword(email, password)
      .then(() => setAuthError(false))
      .catch(() => setAuthError(true));
  };

  return (
    <SafeAreaView>
      <Formik
        validationSchema={logInValidationSchema}
        initialValues={{
          email: 'lalo10@example.com',
          password: 'Lalo10!)',
        }}
        validateOnMount={true}
        onSubmit={values => handleLogIn(values)}>
        {formProps => (
          <View>
            <View style={style.upper_background}>
              <View>
                <ArrowBack navigation={navigation} />
                <ScreenGreenTitle span={'login'} />
              </View>
              <View>
                <TextField
                  {...formProps}
                  label={<Span text="email" />}
                  name="email"
                  authError={authError && span('errorAuth')}
                />
              </View>
              <View>
                <PasswordField
                  {...formProps}
                  label={<Span text="password" />}
                  name="password"
                  authError={authError && span('errorAuth')}
                />
              </View>
            </View>
            <View>
              <View style={style.buttons_container} />
              <ButtonForm
                isDisabled={!formProps.isValid}
                onPress={formProps.handleSubmit}
                text={<Span text={'login'} />}
              />
              <Text style={style.lower_content_text}>
                <Span text="or" />
              </Text>
              <ButtonForm
                onPress={onGoogleButtonPress}
                text={<Span text="signinGoogle" />}
              />
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
