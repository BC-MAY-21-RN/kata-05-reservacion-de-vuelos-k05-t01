import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
export const verifyAuth = navigation => {
  function onAuthStateChanged(user) {
    if (user?.uid) {
      navigation.navigate('FlightReservation');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
};
