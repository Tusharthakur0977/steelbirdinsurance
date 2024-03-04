import React from 'react';
import {ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import COLORS from '../../../utils/COLORS';
interface ILoaderProps {
  loaderIndicatorSize?: number | 'large' | 'small';
  color?: string;
  style?: ViewStyle;
}
export default function Loader(props: ILoaderProps) {
  const {loaderIndicatorSize = 'large', style, color = COLORS.Orange} = props;
  return (
    <ActivityIndicator
      animating={true}
      size={loaderIndicatorSize}
      color={color}
      style={[style, styles.loader]}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    alignSelf: 'center',
  },
});
