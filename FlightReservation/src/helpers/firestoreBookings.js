/* eslint-disable prettier/prettier */
import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const registerFlight = async (route, navigation) => {
  const {from, to, startDate, endDate, passengers} = route.params;
  const newData = {
    from,
    to,
    startDate,
    endDate,
    passengers,
  };
  await firestore()
    .collection('bookings')
    .doc(auth().currentUser.uid)
    .get()
    .then(async documentSnapshot => {
      if (documentSnapshot.exists) {
        var collectionData = documentSnapshot.data();
        newData.id = (collectionData.flights.length + 1).toString();
        collectionData.flights.push(newData);
        console.log("COLECCIÓN DE VUELOS:",collectionData.flights);
        await firestore()
          .collection('bookings')
          .doc(auth().currentUser.uid)
          .set(collectionData);
      }
      navigation.navigate('Results');
    })
};
export default registerFlight;
