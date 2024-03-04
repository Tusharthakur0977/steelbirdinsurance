import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import COLORS from '../../../utils/COLORS';
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from '../../../utils/METRIC';

const Styles = StyleSheet.create({
  saferAreCont: {
    flex: 1,
    backgroundColor: COLORS.AppBackgroundColor,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.AppBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topCont: {
    alignItems: 'center',
    marginBottom: verticalScale(40),
    gap: verticalScale(10),
  },
  loginText: {
    fontSize: responsiveFontSize(25),
    fontWeight: 'bold',
    color: COLORS.White,
  },

  inputCont: {gap: verticalScale(20)},
  emailBox: {
    width: wp(90),
    borderRadius: 30,
    paddingHorizontal: horizontalScale(20),
    fontSize: responsiveFontSize(15),
    marginBottom: verticalScale(5),
  },

  otpBox: {
    backgroundColor: COLORS.White,
    width: wp(90),
    borderRadius: 30,
    paddingHorizontal: horizontalScale(20),
    fontSize: responsiveFontSize(15),
    marginBottom: verticalScale(5),
  },
  otpBottomCont: {
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  getOtpbutton: {
    width: wp(90),
    backgroundColor: COLORS.Orange,
    borderRadius: 30,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  getOtpTitle: {
    color: COLORS.White,
    fontSize: responsiveFontSize(15),
  },

  orCont: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
    width: wp(90),
    marginVertical: verticalScale(20),
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth * 1.5,
    backgroundColor: COLORS.LightGrey,
  },
  orText: {
    fontSize: responsiveFontSize(14),
    fontWeight: 'normal',
    color: COLORS.White,
  },

  bottomCont: {
    gap: verticalScale(20),
  },
});

export default Styles;
