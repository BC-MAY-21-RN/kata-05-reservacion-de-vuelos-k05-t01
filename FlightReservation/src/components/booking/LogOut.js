/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../consts/style';

const LogOut = function ({navigation}) {
  return (
    <View>
      <Icon
        style={[style.iconBooking, style.upper_background]}
        name="logout"
        onPress={() => navigation.navigate('LogIn')}
      />
    </View>
  );
};

export default LogOut;