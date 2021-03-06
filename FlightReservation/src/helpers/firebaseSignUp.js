/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {WEB_CLIENT_ID} from '@env';

export const signInWithNameEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      user
      .updateProfile({displayName: name})
      .then(
        () => resolve('User created & signed in'),
        createAditionalData(),
        );
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
      webClientId: WEB_CLIENT_ID,
    });
  }, []);
};

export const onGoogleButtonPress = async navigation => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  auth()
    .signInWithCredential(googleCredential)
    .then(response => {
      if (response) {
        createAditionalData();
        navigation.navigate('FlightReservation');
      }
    });
};

const createAditionalData = () => {
  firestore()
    .collection('bookings')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore().collection('bookings').doc(auth().currentUser.uid).set({
          flights: [],
        });
      }
    });
};
