import React from 'react';
import {View, Text} from 'react-native';
// import Span, {span} from '../consts/i18n/en';
import Span, {span} from './../../consts/i18n/en';
import style from './../../consts/style';

const ScreenGreenTitle = ({span}) => {
  return (
    <View style={style.upper_background}>
      <Text style={style.title}>
        <Span text={span} span={span} />
      </Text>
    </View>
  );
};

export default ScreenGreenTitle;
