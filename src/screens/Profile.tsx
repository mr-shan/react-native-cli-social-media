import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import Colors from '@app/utils/colors';
import {UserProfile} from '@app/components/userProfile/UserProfile';
import {USERS} from '@app/data/users';
import {horizontalScale, verticalScale} from '@app/utils/scaling';
import {NavigationBackButton} from '@app/components/ui/buttons/NavigationBackButton';

type PropType = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

const ProfileScreen = ({route, navigation}: PropType) => {
  let userDataIndex = 1;

  if (route?.params?.userId) {
    const userIndex = USERS.findIndex(
      user => user.id === route?.params?.userId,
    );
    userDataIndex = userIndex > -1 ? userIndex : userDataIndex;
  }

  let backButton = null;

  if (navigation.canGoBack()) {
    backButton = <NavigationBackButton onPress={navigation.goBack} />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {backButton}
        <UserProfile userData={USERS[userDataIndex]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: Colors.bg900, flex: 1},
  scrollView: {flexGrow: 1},
  backButton: {
    position: 'absolute',
    left: horizontalScale(8),
    top: verticalScale(12),
    padding: horizontalScale(8),
  },
});
