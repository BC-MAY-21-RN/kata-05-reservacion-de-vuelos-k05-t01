/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';

export const logInWithEmailAndPassword = async (email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          reject('Incorrect email and/or password');
        }
      });
  });
};
