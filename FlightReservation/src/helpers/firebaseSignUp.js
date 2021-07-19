/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';

export const signInWithNameEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user
          .updateProfile({displayName: name})
          .then(() => resolve('User created & signed in'));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
      });
  });
};

export const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '485144115607-mricdh0gp8vvo7911rvjc4ahb5mavbjk.apps.googleusercontent.com',
    });
  }, []);
};

export const onGoogleButtonPress = async (navigation) => {
  console.log('working');
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  auth().signInWithCredential(googleCredential).then((response) => {
    if (response){
      navigation.navigate('LogIn');
    }
 });
};
