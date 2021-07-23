import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Span from '../../consts/i18n/en';
import style from '../../consts/style';

const LoadingPage = ({status}) => (
  <View style={[style.modal_container, style.center_item]}>
    <View style={[style.modal_background, style.center_item]}>
      <ActivityIndicator size="large" color="#FC8417" style={style.spinner} />
      <Text style={style.modal_text}>
        <Span text="signingUp" />
      </Text>
    </View>
  </View>
);

export default LoadingPage;
