/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormHeading from '../customUI/FormHeading';
import TopHeader from '../customUI/TopHeader';
import TextBox from '../customUI/TextBox';
import Button from '../customUI/Button';
import BottomImg from '../customUI/BottomImg';

type Props = {}

const ConfirmDetails = ({}: Props) => {


  return (
    <SafeAreaView style={styles.mainView}>
      <TopHeader/>
        <View style={styles.formBody}>
            <FormHeading mainText="Confirm Details" subText="Confirm your details"/>
            <View style={{justifyContent: 'center'}}>
              <TextBox inputText="Full Name" keyboardType="default" editable={false}/>
              <TextBox inputText="Email" keyboardType="email-address" editable={false}/>
              <TextBox inputText="Call-Up Number" keyboardType="default" editable={false}/>
              <TextBox inputText="Phone Number" keyboardType="default" editable={false}/>
              <Button onPress={()=>{}} text="Continue" disabled={false}/>
            </View>
        </View>
        <BottomImg />
    </SafeAreaView>
  );
};

export default ConfirmDetails;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
    },
    formBody: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
});
