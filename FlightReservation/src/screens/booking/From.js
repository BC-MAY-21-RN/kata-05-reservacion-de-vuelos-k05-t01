/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import Span from '../../consts/i18n/en';
import List from '../../components/booking/ItemList';
import ListPlaces from '../../components/booking/consts/ListPlaces';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import style from '../../consts/style';

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
      <ArrowBack navigation={navigation} />
      <View style={style.superior_content_container}>
        <View style={style.bookingTitleContainer}>
          <Flight name="flight-takeoff" />
          <Text style={style.bookingTitle}>
            <Span text="from" />
          </Text>
        </View>
      </View>
      <List
        list={ListPlaces}
        item={fromPlace}
        setSelectedItem={setSelectedFromPlace}
      />
      <View style={style.btnBooking}>
        <ButtonForm onPress={next} text={<Span text="next" />} />
      </View>
    </SafeAreaView>
  );
};

export default From;
