import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLORS from '../../../utils/COLORS';
import {responsiveFontSize} from '../../../utils/METRIC';

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.AppBackgroundColor,
    paddingBottom: hp(10),
  },
  text: {
    fontSize: responsiveFontSize(35),
    fontWeight: 'bold',
    color: COLORS.White,
  },
});

export default Styles;
