import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../utils/COLORS';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {HomeStackParams} from '../../typings/route';
import DetailCard from './components/DetailCard';
import Styles from './styles';

type EmergencyDetailsProps = NativeStackScreenProps<
  HomeStackParams,
  'emergencyDetails'
>;

const EmergencyDetails: FC<EmergencyDetailsProps> = ({navigation}) => {
  const keyExtractor = (item: any, index: any) => item + index;

  return (
    <SafeAreaView style={Styles.saferAreCont}>
      <FlatList
        ListHeaderComponent={
          <>
            {navigation.canGoBack() && (
              <View style={Styles.headerCont}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.7}
                  style={Styles.headerLeftCont}>
                  <AntIcons
                    name="arrowleft"
                    size={20}
                    style={{color: COLORS.White}}
                  />
                  <Text style={Styles.headerText}>My Emergency Details</Text>
                </TouchableOpacity>

                <PrimaryButton
                  title="Logout"
                  buttonStyle={Styles.logoutBtnCont}
                  titleStyle={Styles.logoutBtnTitle}
                />
              </View>
            )}
          </>
        }
        data={[1, 2, 3, 4, 5]}
        renderItem={({}) => <DetailCard />}
        keyExtractor={keyExtractor}
        contentContainerStyle={Styles.listCont}
      />
    </SafeAreaView>
  );
};

export default EmergencyDetails;
