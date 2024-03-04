import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import COLORS from '../../../../utils/COLORS';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from '../../../../utils/METRIC';

type MenuCardProps = {
  title?: string;
  onPress?: () => void;
  bgColor?: string;
  borderColor?: string;
  btnTitle?: string;
  isSecondaryBtn?: boolean;
};

const MenuCard: FC<MenuCardProps> = ({
  title,
  onPress,
  bgColor,
  borderColor,
  btnTitle,
  isSecondaryBtn,
}) => {
  return (
    <View
      style={[
        Styles.main,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}>
      <View style={Styles.rightCont}>
        <Text style={Styles.title}>{title}</Text>
        <View style={Styles.btnCont}>
          <PrimaryButton
            onPress={onPress}
            buttonStyle={Styles.btnStyles}
            title={btnTitle}
            titleStyle={Styles.btnText}
          />
          {isSecondaryBtn && (
            <PrimaryButton
              onPress={onPress}
              buttonStyle={Styles.secBtnStyles}
              title="SCAN QR CODE"
              titleStyle={Styles.secBtnText}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const Styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    width: widthPercentageToDP(93),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(18),
    borderRadius: 10,
  },
  rightCont: {
    gap: verticalScale(12),
    alignItems: 'flex-start',
  },
  title: {
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    color: COLORS.White,
  },

  btnCont: {flexDirection: 'row', gap: horizontalScale(10)},

  btnStyles: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(8),
    backgroundColor: COLORS.White,
    borderRadius: 20,
    alignItems: 'center',
  },

  btnText: {
    color: COLORS.Purple,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(10),
  },
  secBtnStyles: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(8),
    backgroundColor: 'transparent',
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.White,
  },

  secBtnText: {
    color: COLORS.White,
    fontWeight: 'normal',
    fontSize: responsiveFontSize(10),
  },
});
