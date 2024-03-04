import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
    alignItems: 'center',
  },
  scrollCont: {
    flex: 1,
    gap: verticalScale(20),
    alignItems: 'center',
  },

  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    paddingVertical: verticalScale(5),
    marginBottom: verticalScale(5),
  },
  headerText: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
    color: COLORS.White,
  },

  logo: {
    height: hp(10),
    width: wp(20),
    alignSelf: 'center',
    marginVertical: verticalScale(5),
  },

  listCont: {
    flex: 1,
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  inputBox: {},

  inputField: {
    backgroundColor: COLORS.White,
    width: wp(90),
    borderRadius: 30,
    paddingHorizontal: horizontalScale(20),
    fontSize: responsiveFontSize(13),
    height: hp(6),
  },

  errorText: {
    color: COLORS.Orange,
    fontSize: responsiveFontSize(10),
    marginTop: 5,
    paddingLeft: horizontalScale(10),
  },

  btonText: {
    color: COLORS.White,
    fontSize: responsiveFontSize(15),
  },
  btnStyle: {
    width: wp(90),
    backgroundColor: COLORS.Orange,
    borderRadius: 30,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },

  browseFieldCont: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  browseFieldLabel: {
    color: COLORS.White,
    fontSize: responsiveFontSize(15),
  },

  browsebtonText: {
    color: COLORS.AppBackgroundColor,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(16),
  },
  browseStyle: {
    backgroundColor: COLORS.White,
    borderRadius: 30,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(5),
  },

  purchasedFromCont: {
    marginTop: verticalScale(5),
    gap: verticalScale(5),
  },
  purchasedFromTextCont: {
    paddingHorizontal: horizontalScale(10),
  },
  purchasedFromText: {
    color: COLORS.White,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(12),
  },
});

export default Styles;
