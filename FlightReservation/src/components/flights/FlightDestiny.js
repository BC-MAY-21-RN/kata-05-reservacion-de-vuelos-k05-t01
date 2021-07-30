import React from 'react';
import {Text, View} from 'react-native';
import style from './../../consts/style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FlightDestiny = ({navigation}) => {
  return (
    <View style={style.flight_element}>
      <View style={style.flights_row}>
        <Text style={style.flights_big_text}>BEG</Text>
        <Icon style={style.flight_icon} name="airplanemode-active" />
        <Text style={style.flights_big_text}>AMS</Text>
      </View>
      <View style={style.flights_row}>
        <Text style={style.flights_small_text_light}>Serbia</Text>
        <Text style={style.flights_small_text_light}>Netherlands</Text>
      </View>
      <View style={style.separator_thin} />
      <View style={style.flights_row}>
        <Text style={style.flights_small_text_bold}>September 2, 2020</Text>
        <Text style={style.flights_small_text_bold}>2 passengers</Text>
      </View>
      <View style={style.separator_thick} />
    </View>
  );
};

export default FlightDestiny;
