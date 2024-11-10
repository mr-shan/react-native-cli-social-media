import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import {Text} from '@app/components/ui/text/Text';
import Colors from '@app/utils/colors';
// import { SafeAreaView } from 'react-native-safe-area-context';

const NewPostScreen = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: Colors.bg900}}>
      <View style={styles.container}>
        <Text>New Post</Text>
      </View>
    </SafeAreaView>
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

export default NewPostScreen;
