import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import COLORS from '../../../utils/COLORS';
import {horizontalScale} from '../../../utils/METRIC';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {RootStackParams} from '../../typings/route';
import Styles from './styles';

type LoginProps = NativeStackScreenProps<RootStackParams, 'login'>;

const Login: FC<LoginProps> = ({navigation}) => {
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleLoginButton = () => {
    if (!isOtpSend) {
      setIsOtpSend(true);
    } else {
      navigation.replace('main', {screen: 'home'});
    }
  };

  return (
    <SafeAreaView style={Styles.saferAreCont}>
      <ScrollView
        contentContainerStyle={Styles.main}
        automaticallyAdjustKeyboardInsets
        showsVerticalScrollIndicator={false}>
        <View style={Styles.topCont}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{
              height: heightPercentageToDP(20),
              width: widthPercentageToDP(40),
            }}
          />
          <Text style={Styles.loginText}>Login</Text>
        </View>

        <View style={Styles.inputCont}>
          <View>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              style={[
                Styles.emailBox,
                {backgroundColor: isOtpSend ? COLORS.Skin : COLORS.White},
              ]}
              editable={!isOtpSend}
            />
            {isOtpSend && (
              <View style={{paddingHorizontal: horizontalScale(20)}}>
                <Text style={{color: COLORS.Skin}}>
                  OTP sent to your registered email
                </Text>
              </View>
            )}
          </View>
          {isOtpSend && (
            <View>
              <TextInput
                value={otp}
                onChangeText={setOtp}
                placeholder={'Enter OTP'}
                style={Styles.otpBox}
              />
              <View style={Styles.otpBottomCont}>
                <Text style={{color: COLORS.Green}}>Valid only for 3 mins</Text>
                <TouchableOpacity>
                  <Text style={{color: COLORS.White}}>Resend OTP</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <PrimaryButton
            title={isOtpSend ? 'Verify' : 'Get OTP'}
            onPress={handleLoginButton}
            buttonStyle={Styles.getOtpbutton}
            titleStyle={Styles.getOtpTitle}
          />
        </View>

        <View style={Styles.orCont}>
          <View style={Styles.line} />
          <Text style={Styles.orText}>OR</Text>
          <View style={Styles.line} />
        </View>

        <View style={Styles.inputCont}>
          <PrimaryButton
            title="Login with Google"
            buttonStyle={Styles.getOtpbutton}
            titleStyle={Styles.getOtpTitle}
          />
          <PrimaryButton
            title="Login with Facebook"
            buttonStyle={Styles.getOtpbutton}
            titleStyle={Styles.getOtpTitle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
