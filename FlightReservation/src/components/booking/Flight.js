/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../consts/style';

const Flight = function ({name}) {
  return (
    <>
      <Icon style={style.iconBookingFlight} name={name} />
    </>
  );
};

export default Flight;
