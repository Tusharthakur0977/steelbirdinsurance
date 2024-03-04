import React, {FC} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import Loader from '../Loader/Loader';
import COLORS from '../../../utils/COLORS';

type ButtonProps = {
  title?: string;
  titleStyle?: TextStyle | any;
  buttonStyle?: ViewStyle | any;
  onPress?: () => void;
  isLoading?: boolean;
  loaderSize?: number | 'small' | 'large' | undefined;
  loaderColor?: string | undefined;
};

const PrimaryButton: FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={props.buttonStyle}>
      {props.isLoading ? (
        <Loader
          color={props.loaderColor || COLORS.White}
          loaderIndicatorSize={props.loaderSize || 'small'}
        />
      ) : (
        props.title && <Text style={[props.titleStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
