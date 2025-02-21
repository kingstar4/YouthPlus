/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
    mainText: string;
    subText: string;
}

const FormHeading = ({mainText, subText}: Props) => {
  return (
    <View style={{marginBottom:10}}>
        <Text style={styles.mainTxt}>{mainText}</Text>
        <Text style={styles.subTxt}>{subText}</Text>
    </View>
  );
};

export default FormHeading;

const styles = StyleSheet.create({
    mainTxt:{
        fontSize: 27,
        color: 'black',
        fontWeight: 700,
        lineHeight: 33,
    },
    subTxt:{
        lineHeight:19,
        color:'#6E6E6E66',
        fontWeight:500,
        fontSize:16,
        marginTop:10,
    },
});
