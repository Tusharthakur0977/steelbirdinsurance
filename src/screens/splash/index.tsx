import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RootStackParams} from '../../typings/route';
import Styles from './style';

type SplashProps = NativeStackScreenProps<RootStackParams, 'splash'>;

const Splash: FC<SplashProps> = ({navigation}) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('login');
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={Styles.main}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          height: heightPercentageToDP(20),
          width: widthPercentageToDP(40),
        }}
      />
      <Text style={Styles.text}>Steelbird Insurance</Text>
    </View>
  );
};

export default Splash;
