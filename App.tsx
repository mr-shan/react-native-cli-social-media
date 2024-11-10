import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabs from '@app/navigation/BottomTabs';
import Colors from '@app/utils/colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Colors.bg900)
    }
  }, [isDarkMode])

  return (
    <>
      <StatusBar
        backgroundColor={Colors.bg900}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {/* react-native-lightbox */}
      {/* react-native-image-viewing */}
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </>
  );
};

export default App;
