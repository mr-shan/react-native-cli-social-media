import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from '@app/components/ui/text/Text';
import Colors from '@app/utils/colors';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>All upto date!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg900,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsScreen;
