import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import COLORS from '../../../../utils/COLORS';
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from '../../../../utils/METRIC';

const DetailCard = () => {
  return (
    <View style={Styles.main}>
      <View style={Styles.topCont}>
        <Text style={Styles.nameText}>Rahul Kumar</Text>
        <Text style={Styles.numText}>+91 123467890</Text>
      </View>
      <View style={Styles.bottomCont}>
        <Text style={Styles.numText}>Father's Name: testing</Text>
        <Text style={Styles.numText}>Email: abc@gmail.com</Text>
        <Text style={Styles.numText}>Date of birth: 03-03-1980</Text>
        <Text style={Styles.numText}>invoice ID: 9876543234</Text>
        <View style={Styles.addressTextCont}>
          <Text style={Styles.addressText}>
            Address: Playerz own Sector 70 Mohali, Chandigarh, 160071
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailCard;

const Styles = StyleSheet.create({
  main: {
    width: widthPercentageToDP(90),
  },
  topCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0E0A07',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
  },
  nameText: {
    color: COLORS.Orange,
    fontSize: responsiveFontSize(15),
    fontWeight: '600',
  },
  numText: {
    color: COLORS.LightGrey,
    fontSize: responsiveFontSize(15),
    fontWeight: '600',
  },
  bottomCont: {
    gap: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
  addressTextCont: {
    marginTop: verticalScale(10),
  },
  addressText: {
    color: COLORS.LightGrey,
    fontSize: responsiveFontSize(15),
    fontWeight: '600',
  },
});
