import React from 'react';
import {Text, View} from 'react-native';
import style from './../../consts/style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlusButton = ({navigation}) => {
  return (
    <View style={style.plus_button_container}>
      <Icon style={style.plus_button} name="add-circle" onPress={navigation} />
    </View>
  );
};

export default PlusButton;
