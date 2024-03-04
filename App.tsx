import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Routing from './src/navigation';
import COLORS from './utils/COLORS';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.AppBackgroundColor}
      />
      <Routing />
    </NavigationContainer>
  );
}

export default App;
