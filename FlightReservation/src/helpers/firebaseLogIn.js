/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';

export const logInWithEmailAndPassword = async (email, password, navigation) => {

  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(({user}) => {
      console.log('User signed in!');
      navigation.navigate('FlightReservation');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
      }

      if (error.code === 'auth/invalid-email') {
      }
    });

};
