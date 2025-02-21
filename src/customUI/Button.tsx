import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type ButtonProps={
    text: string;
    onPress: ()=>void;
    disabled?: boolean;
}

const Button = ({text, disabled = true, onPress}:ButtonProps) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={[styles.btn, disabled && styles.btnDisabled ]} disabled={disabled}>
            <Text style={styles.txt}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    btn:{
        width:'100%',
        height:46,
        backgroundColor:'#09839B',
        color:'#fff',
        borderRadius:10,
        elevation:5,
    },
    btnDisabled:{
        backgroundColor:'#9cccd6',
        color:'#fff',
    },
    txt:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        lineHeight:46,
    },
});
