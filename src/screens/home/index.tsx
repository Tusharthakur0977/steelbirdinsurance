import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import COLORS from '../../../utils/COLORS';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {HomeStackParams} from '../../typings/route';
import MenuCard from './components/MenuCard';
import Styles from './styles';

type HomeProps = NativeStackScreenProps<HomeStackParams, 'home'>;

const Home: FC<HomeProps> = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.saferAreCont}>
      <View style={Styles.main}>
        <View style={Styles.headerCont}>
          <PrimaryButton
            title="Logout"
            buttonStyle={Styles.logoutBtnCont}
            titleStyle={Styles.logoutBtnTitle}
          />
          <Text style={Styles.menuText}>Menu</Text>
        </View>
        <View style={Styles.content}>
          <View style={Styles.profileView}>
            <Image source={require('../../assets/images/Ellipse.png')} />
            <Text style={Styles.profileText}>Rahul Kumar</Text>
          </View>
          <View style={Styles.menuCont}>
            <MenuCard
              title="Register for Insurance"
              btnTitle="GET STARTED"
              borderColor={COLORS.Purple}
              bgColor="#270831"
              onPress={() => navigation.navigate('emergencyDetails')}
            />
            <MenuCard
              title="Emergency Details"
              btnTitle="SEE DETAILS"
              borderColor="#19A3BC"
              bgColor="#063638"
              isSecondaryBtn
              onPress={() => navigation.navigate('registerEmergencyContact')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
