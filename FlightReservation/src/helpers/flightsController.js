/* eslint-disable prettier/prettier */
import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function getFlights() {
  return await firebase
    .firestore()
    .collection('bookings')
    .doc(auth().currentUser.uid)
    .get()
    .then(async documentSnapshot => {
      if (documentSnapshot.exists) {
        var collectionData = documentSnapshot.data();
        return collectionData.flights;
      }
    });
}
