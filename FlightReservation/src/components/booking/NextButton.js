/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';

const NextButton = function ({isDisabled, styleButton, next, text}) {
  return (
    <View style={styleButton}>
      <ButtonForm
        isDisabled={isDisabled}
        onPress={next}
        text={<Span text={text} />}
      />
    </View>
  );
};

export default NextButton;
