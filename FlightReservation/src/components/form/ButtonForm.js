/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from '../../consts/style';

const ButtonForm = ({isDisabled, onPress, loading, text}) => {
    return (
        <Pressable
           disabled={isDisabled || loading}
            onPress={onPress}>
            <View style={style.btn}>
                <Text style={style.btnForm}>
                    {text}
                </Text>
            </View>
        </Pressable>
    );
};


export default ButtonForm;