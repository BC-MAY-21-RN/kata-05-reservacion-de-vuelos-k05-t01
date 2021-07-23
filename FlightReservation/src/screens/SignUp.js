/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import TextField from '../components/form/TextField';
import PasswordField from '../components/form/PasswordField';
import ButtonForm from '../components/form/ButtonForm';
import {signUpValidationSchema} from '../schemas/signUpSchema';
import {
  onGoogleButtonPress,
  signInWithNameEmailAndPassword,
} from '../helpers/firebaseSignUp';
import CheckBoxField from '../components/form/CheckBoxField';
import style from './../consts/style';
import Span, {span} from '../consts/i18n/en';
import LoadingPage from '../components/form/LoadingPage';

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
      {loading && (
        <Text>
          <Span text="loading" />
        </Text>
      )}
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
            <LoadingPage></LoadingPage>
            <View style={style.textFieldView}>
              <Text style={style.title}>
                <Span text="signup" />
              </Text>
              <View>
                <TextField
                  {...formProps}
                  label="Name"
                  name="name"
                  text="emailUsed"
                />
              </View>
              <View>
                <TextField
                  {...formProps}
                  label={
                    emailInUseError ? `Email  ${span('emailUsed')}` : `Email`
                  }
                  name="email"
                />
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
                  <Span text="terms" />
                </Text>
              </View>
              <View style={style.termsView}>
                <CheckBoxField {...formProps} name="subscribeForProducts" />
                <Text style={style.lower_content_text}>
                  <Span text="productUpdates" />
                </Text>
              </View>
              <View>
                <View style={style.buttons_container} />
                <ButtonForm
                  isDisabled={!formProps.isValid}
                  onPress={formProps.handleSubmit}
                  text={<Span text="signup" />}
                  loading={loading}
                />
                <Text style={style.lower_content_text}>
                  <Span text="or" />
                </Text>
                <ButtonForm
                  onPress={() => onGoogleButtonPress(navigation)}
                  text={<Span text="signinGoogle" />}
                />
                <View style={style.lower_content_text}>
                  <Text style={style.alreadyTxt}>
                    <Span text="alreadyAccount" />
                    <Text
                      style={style.account_link}
                      onPress={() => {
                        navigation.navigate('LogIn');
                      }}>
                      <Span text="login" />
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
