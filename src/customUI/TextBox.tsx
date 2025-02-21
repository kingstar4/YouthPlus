/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, TextInput, View, KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

type TextBoxProps = {
    inputText: string;
    keyboardType: KeyboardTypeOptions;
    onchangeText?: (text: string) => void;
    value?: string;
    style?: StyleProp<ViewStyle>;
    editable?: boolean;
}

const TextBox = ({inputText, keyboardType, onchangeText, style, value, editable}: TextBoxProps) => {
  return (
    <View style={{marginBottom:20}}>
      <TextInput style={[styles.txtInput, style]} placeholder={inputText}  value={value} onChangeText={onchangeText} editable={editable} keyboardType={keyboardType}/>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
    txtInput:{
        width:'100%',
        height:46,
        color:'#121212',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#E6E6E6',
    },
});
