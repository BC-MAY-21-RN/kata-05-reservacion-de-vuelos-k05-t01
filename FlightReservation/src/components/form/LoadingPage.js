import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import style from '../../consts/style';

const LoadingPage = ({status}) => (
  <View style={[style.modal_container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
    <ActivityIndicator size="large" color="#FC8417" style={style.spinner} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  spinner: {
    color: '#ff0000',
  },
});

export default LoadingPage;
