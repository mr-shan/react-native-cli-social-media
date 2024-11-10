import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet, View} from 'react-native';

import Colors from '@app/utils/colors';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {USERS} from '@app/data/users';
import {ROUTES} from '@app/navigation/Routes';
import {POSTS} from '@app/data/posts';
import {PostRenderItem} from '@app/components/posts/PostRenderItem';
import { NavigationBackButton } from '@app/components/ui/buttons/NavigationBackButton';
import { verticalScale } from '@app/utils/scaling';

type PropType = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

const PostDetailsScreen = ({route, navigation}: PropType) => {
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(ROUTES.Home);
    }
  };

  if (!route?.params?.postId) {
    goBack();
  }

  const postDetails = POSTS.find(e => e.id === route?.params?.postId);
  const userDetails = USERS.find(e => e.id === postDetails?.userId);

  if (!postDetails || !userDetails) {
    goBack();
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <NavigationBackButton onPress={navigation.goBack} />
        <View style={{ height: verticalScale(40) }}/>
        <PostRenderItem
          avatar={userDetails?.avatar}
          postDetails={postDetails}
          userId={userDetails.id}
          userName={userDetails?.firstName + ' ' + userDetails?.lastName}
          isFullScreen
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: Colors.bg900, flex: 1},
  scrollView: {flexGrow: 1},
  container: {},
});
