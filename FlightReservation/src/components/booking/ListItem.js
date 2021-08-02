/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../consts/style';

export const ListItem = props => {
  console.log(props);
  return (
    <View style={style.flight_element}>
      <View style={style.flights_row}>
        <Text style={style.flights_big_text}>{props.fromPlace}</Text>
        <Icon style={style.flight_icon} name="airplanemode-active" />
        <Text style={style.flights_big_text}>{props.toPlace}</Text>
      </View>
      <View style={style.separator_thin} />
      <View style={style.flights_col}>
        <Text style={style.flights_small_text_bold}>{props.startDate}</Text>
        <Text style={style.flights_small_text_bold}>{props.endDate}</Text>
        <Text style={style.flights_small_text_bold}>{props.passengers}</Text>
      </View>
      <View style={style.separator_thick} />
    </View>
  );
};
