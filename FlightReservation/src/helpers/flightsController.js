/* eslint-disable prettier/prettier */
import {firebase} from '@react-native-firebase/firestore';

export async function getFlights(flightRetieved) {
  const flightsList = [];
  const snapshot = await firebase.firestore().collection('bookings').get();
  snapshot.forEach(doc => {
    const flightsDoc = doc.data();
    flightsList.push(flightsDoc);
  });
  flightRetieved(flightsList);
}
