/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import { store } from '../store/store';
import { Formik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';

const SignUp = function() {
    const [showPassword,setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const signUpValidationSchema = yup.object().shape({
        name: yup
        .string()
        .required('Name is required'),
        email: yup
        .string()
        .required('Email Address is Required'),
        password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min}`)
        .required('Password is required')
        .matches(
            '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/',
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        ),
        agreeTerms: yup
        .bool()
        // .required('Agree terms'),
        .oneOf([true], 'Accept Terms & Conditions is required'),
    });

    return (
        <SafeAreaView>
            <Provider store={store}>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{ name: '',email: '', password: '', agreeTerms: false }}
                    validateOnMount= {true}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <View>
                        <Text>Sign up</Text>
                        <View>
                        <Text>Name</Text>
                        <TextInput 
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {(errors.name && touched.name) &&
                            <Text>{errors.name}</Text>}
                        </View>
                        <View>
                        <Text>Email</Text>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {(errors.email && touched.email) &&
                            <Text>{errors.email}</Text>}
                        </View>
                        <View>
                        <Text>Password</Text>
                        <TextInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry = {!showPassword}
                        />
                        <Icon  name={showPassword ? 'visibility' : 'visibility-off'} onPress= {()=> setShowPassword(!showPassword)} />
                        {(errors.password && touched.password) &&
                            <Text>{errors.password}</Text>}
                            <Text>Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.</Text>
                        </View>
                        <View>
                            <CheckBox
                                disabled={false}
                                // onCheckColor=  '#5C6DF8'
                                onPress={()=> setAgreeTerms(!agreeTerms)}
                                value={agreeTerms}
                            />
                            {(errors.agreeTerms && touched.agreeTerms) &&
                            <Text>{errors.agreeTerms}</Text>}
                            <Text>I agree with the Terms and Privacy Policy.</Text>
                            <Text>*</Text>
                            <CheckBox
                                disabled={false}
                                // onCheckColor=  '#5C6DF8'
                                // onPress={()=> setAgreeTerms(!agreeTerms)}
                                // value={agreeTerms}
                            />
                            <Text>Subscribe for select product updates.</Text>
                        </View>
                        <View>
                        <Button
                        rounded
                        // disabled={!isValid}
                        onPress={handleSubmit} title="Sign up" />
                        <Text>or</Text>
                        <Button title="Sign up with Google" />
                        <Text>already have an account?</Text>
                        <Text>Log in</Text>
                        </View>
                    </View>
                    )}
                </Formik>
                </Provider>
        </SafeAreaView>
    );
};

export default SignUp;
