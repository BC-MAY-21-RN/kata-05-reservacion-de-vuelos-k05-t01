import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Span from '../../consts/i18n/en';
import style from '../../consts/style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoadingPage = ({status, navigation, setStatus}) => {
  if (status === 'loading') {
    return (
      status === 'loading' && (
        <View style={[style.modal_container, style.center_item]}>
          <View style={[style.modal_background, style.center_item]}>
            <ActivityIndicator
              size="large"
              color="#fff"
              style={style.spinner}
            />
            <Text style={style.modal_text}>
              <Span text="signingUp" />
            </Text>
          </View>
        </View>
      )
    );
  } else if (status === 'signedUp') {
    setTimeout(() => {
      console.log('hola');
      setStatus(false);
      navigation.navigate('SignUp');
    }, 2000);

    return (
      status === 'signedUp' && (
        <View style={[style.modal_container, style.center_item]}>
          <View style={[style.modal_background, style.center_item]}>
            <Icon
              style={style.modal_icon}
              name="check-circle-outline"
              onPress={() => setShowPassword(!showPassword)}
            />
            <Text style={style.modal_text}>
              <Span text="signedUp" />
            </Text>
          </View>
        </View>
      )
    );
  }
};

export default LoadingPage;
