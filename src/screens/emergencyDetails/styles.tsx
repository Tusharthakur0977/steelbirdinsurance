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
    alignItems: 'center',
  },
  listCont: {
    gap: horizontalScale(15),
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
  headerLeftCont: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  headerText: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
    color: COLORS.White,
  },
  logoutBtnCont: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(5),
    backgroundColor: COLORS.Orange,
    borderRadius: 15,
  },
  logoutBtnTitle: {
    fontSize: responsiveFontSize(12),
    fontWeight: 'normal',
    color: COLORS.White,
  },
});

export default Styles;
