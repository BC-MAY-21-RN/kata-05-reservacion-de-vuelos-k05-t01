/* eslint-disable prettier/prettier */
import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const BookingsResults = ({route}) => {
    const {from, to, startDate, endDate, passengers} = route.params;
    const newData = {
        from,
        to,
        startDate,
        endDate,
        passengers,
    };
    const next = () => {
        firestore()
            .collection('bookings')
            .doc(auth().currentUser.uid)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists){
                    var collectionData = documentSnapshot.data();
                    newData.id = collectionData.flights.lenght.toString();
                    collectionData.flights.push(newData);

                    firestore()
                    .collection('bookings')
                    .doc(auth().currentUser.uid)
                    .set(collectionData);
            }
        });
    };
};
