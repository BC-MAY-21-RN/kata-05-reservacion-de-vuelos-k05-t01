/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

firestore()
.collection('booking')
.add({
    origin: 'Mexico',
    destiny: 'Colombia',
    date: '28 de junio de 2021',
    passengers: 3,
})