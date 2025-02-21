/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet,  TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

type TopHeaderProps = {

}

const TopHeader = ({}: TopHeaderProps) => {
    const navigation = useNavigation();
  return (
     <View style={styles.headerContainer}>
        <TouchableOpacity style={{ display:'flex', justifyContent:'center', alignItems:'center'}} onPress={()=>navigation.goBack()}>
            <Icons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <View style={{ display:'flex', flexDirection:'row'}}>
            <Image source={require('../../assets/img/logo.png')} style={{width:97, height:20}}/>
        </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        paddingTop:30,
        paddingHorizontal:5,
        gap:90,
    },
});
