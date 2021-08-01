/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Span, {span} from '../consts/i18n/en';
import style from '../consts/style';
import ArrowBack from '../components/booking/ArrowBack';
import FlightDestiny from '../components/flights/FlightDestiny';
import ScreenGreenTitle from '../components/screenConsts/ScreenGreenTitle';
import PlusButton from './../components/flights/PlusButton';
import {getFlights} from '../helpers/flightsController';

const FlightReservation = ({navigation}) => {
  // const [flightsList, setFlightsList] = useState();

  // useEffect(() => {
  //   getData();
  // });

  // function getData() {
  //   getFlights(flightRetieved);
  // }

  // function flightRetieved(flightsList) {
  //   setFlightsList(flightsList);
  // }
  // // LISTA DE VUELOS
  // <FlatList
  //   data={flightsList}
  //   keyExtractor={item => item.id}
  //   renderItem={({item}) => <ListItem item={item} />}
  // />;
  return (
    <View style={style.flights_container}>
      <ScrollView>
        <View>
          <ArrowBack
            navigation={() => navigation.navigate('LogIn')}
            name={'logout'}
          />
          <ScreenGreenTitle span={'flights'} />
          <View style={style.inferior_content_container}>
            <FlightDestiny />
          </View>
        </View>
      </ScrollView>
      <PlusButton navigation={() => navigation.navigate('From')} />
      <View></View>
    </View>
  );
};

export default FlightReservation;
