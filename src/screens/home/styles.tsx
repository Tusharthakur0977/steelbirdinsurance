import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/COLORS';
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from '../../../utils/METRIC';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    gap: heightPercentageToDP(7),
  },
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    paddingVertical: verticalScale(5),
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
  menuBtnCont: {
    backgroundColor: COLORS.Orange,
    borderRadius: 15,
  },
  menuText: {
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    color: COLORS.White,
  },

  content: {
    flex: 1,
    gap: heightPercentageToDP(7),
  },

  profileView: {
    alignItems: 'center',
    gap: verticalScale(10),
  },
  profileText: {
    fontSize: responsiveFontSize(14),
    fontWeight: 'normal',
    color: COLORS.White,
  },

  menuCont: {gap: verticalScale(15)},
});

export default Styles;
