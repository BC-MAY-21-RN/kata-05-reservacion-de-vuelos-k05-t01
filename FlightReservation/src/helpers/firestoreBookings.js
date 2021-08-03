/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const registerFlight = async (route, navigation, getFlightsUser) => {
  const {fromPlace, toPlace, startDate, endDate, passengers} = route.params;
  const newData = {
    fromPlace,
    toPlace,
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
        newData.id = collectionData.flights.length.toString();
        collectionData.flights.push(newData);
        await firestore()
          .collection('bookings')
          .doc(auth().currentUser.uid)
          .set(collectionData);
        navigation.navigate('FlightReservation');

        await getFlightsUser();
      }
    });
};
export default registerFlight;
