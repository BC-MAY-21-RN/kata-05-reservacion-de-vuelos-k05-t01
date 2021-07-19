/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from '../../consts/style';

const GoogleButton = ({text, onPress}) => {
    return (
        <Pressable
        onPress={onPress}>
            <View style={style.btn}>
                <Text style={style.btnForm}>
                    {text}
                </Text>
            </View>
        </Pressable>
    );
};

export default GoogleButton;