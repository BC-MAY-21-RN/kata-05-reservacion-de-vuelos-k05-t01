/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import List from '../../components/booking/ItemList';
import ListPlaces from '../../components/booking/consts/ListPlaces';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import style from '../../consts/style';

const To = function ({navigation, route}) {
  const [toPlace, setSelectedToPlace] = useState(null);
  const next = () => {
    navigation.navigate('Date', {
      ...route.params,
      toPlace,
    });
  };
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View style={style.superior_content_container}>
        <View style={style.upperLocationContainer}>
          <Text style={style.upperLocationTitle}>{route.params.fromPlace}</Text>
          <Flight name="flight" />
        </View>
        <View style={style.bookingTitleContainer}>
          <Flight name="flight-land" />
          <Text style={style.bookingTitle}>
            <Span text="to" />
          </Text>
        </View>
      </View>
      <List
        list={ListPlaces}
        item={toPlace}
        setSelectedItem={setSelectedToPlace}
      />
      <View style={style.btnBooking}>
        <ButtonForm onPress={next} text={<Span text="next" />} />
      </View>
    </SafeAreaView>
  );
};

export default To;
