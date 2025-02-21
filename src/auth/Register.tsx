/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../customUI/Button';
import TextBox from '../customUI/TextBox';
import BottomImg from '../customUI/BottomImg';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopHeader from '../customUI/TopHeader';
import FormHeading from '../customUI/FormHeading';
import {useState} from 'react';
import {Text} from 'react-native-gesture-handler';
import { RootStackParamList } from '../routes/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ScreenName from '../constants/ScreenName';

type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;


const Register = ({navigation}:RegisterProps) => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [callUpNo, setCallUpNo] = useState('');
  const [callUpNoTouched, setCallUpNoTouched] = useState(false);

  const checkEmail = (userEmail: string) => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(userEmail);
  };

  const isValid = checkEmail(email) && callUpNo.length >= 11;

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopHeader />
      <View style={styles.formBody}>
        <View style={{flexDirection: 'column', marginTop: 150, flex: 1}}>
          <FormHeading
            mainText="Register"
            subText="Sign-Up using your NYSC details"
          />

          <View style={{marginTop: 20, justifyContent: 'center'}}>
            {checkEmail(email) === false || null ? (
              <View style={{marginBottom: 10}}>
                <TextBox
                  inputText="Email"
                  value={email}
                  onchangeText={(text)=>{setEmail(text); setEmailTouched(true);}}
                  style={{borderColor: emailTouched && !checkEmail(email) ? 'red' : '#ccc', borderWidth:1}}
                  keyboardType="email-address"
                />
                {emailTouched && (<Text style={{color: 'red', marginBottom: 10, fontWeight: 'bold'}}>
                  Empty or Invalid Email
                </Text>)}
              </View>
            ) : (
              <View>
                <TextBox
                  inputText="Email"
                  value={email}
                  onchangeText={setEmail}
                  style={{borderColor: 'green', borderWidth:1}}
                  keyboardType="email-address"
                />
              </View>
            )}

            {callUpNo.length < 11 ? (<TextBox
              inputText="Call-Up No/ Phone Number"
              value={callUpNo}
              style={{borderColor: callUpNoTouched && callUpNo.length < 11 ? 'red' : '#ccc', borderWidth:1}}
              onchangeText={(text)=>{setCallUpNo(text); setCallUpNoTouched(true);}}
              keyboardType="default"
            />) : <TextBox
            inputText="Call-Up No/ Phone Number"
            value={callUpNo}
            style={{borderColor: 'green', borderWidth:1}}
            onchangeText={setCallUpNo}
            keyboardType="default"
          />}

            <Button onPress={() => navigation.navigate(ScreenName.ConfirmDetails)} text="Continue" disabled={!isValid} />
          </View>
        </View>
      </View>

      <BottomImg />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  formBody: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
