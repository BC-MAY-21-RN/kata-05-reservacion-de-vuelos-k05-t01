/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import List from '../../components/booking/ItemList';
import ListPlaces from '../../components/booking/consts/ListPlaces';
import ArrowBack from '../../components/booking/ArrowBack';
import BookingTitle from '../../components/booking/BookingTitle';
import style from '../../consts/style';
import NextButton from '../../components/booking/NextButton';
import ScreenGreenTitle from '../../components/screenConsts/ScreenGreenTitle';

const From = function ({navigation, route}) {
  const [fromPlace, setSelectedFromPlace] = useState(null);
  const next = () => {
    navigation.navigate('To', {
      ...route.params,
      fromPlace,
    });
  };
  return (
    <SafeAreaView>
      <ArrowBack navigation={() => navigation.goBack()} name={"chevron-left"}/>
      <View style={style.superior_content_container}>
        <BookingTitle flight="flight-takeoff" text="from" />
      </View>
      <List
        list={ListPlaces}
        item={fromPlace}
        setSelectedItem={setSelectedFromPlace}
      />
      <NextButton
        isDisabled={!fromPlace}
        styleButton={style.btnBooking}
        next={next}
        text="next"
      />
    </SafeAreaView>
  );
};

export default From;
