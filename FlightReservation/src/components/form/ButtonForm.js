/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import colors from '../../consts/colors';
import style from '../../consts/style';


const ButtonForm = ({isValid, handleSubmit, loading, text}) => {
    return (
        <Pressable
            disabled={!isValid || loading}
            onPress={handleSubmit}>
            <View style={style.btn}>
                <Text style={{color: colors.white, fontSize: 18}}>
                    {text}
                </Text>
            </View>
        </Pressable>
    )
}

export default ButtonForm;
