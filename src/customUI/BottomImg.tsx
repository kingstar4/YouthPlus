import { StyleSheet, Image, View, Dimensions } from 'react-native';
import React from 'react';


const { width: deviceWidth } = Dimensions.get('window');
const BottomImg = () => {

  return (
    <View>
      <Image style={styles.imgStyle} resizeMode="cover" source={require('../../assets/img/bottom.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle:{
      position:'absolute',
      bottom:0,
      width: deviceWidth,
      height:129,
  },
});


export default BottomImg;
