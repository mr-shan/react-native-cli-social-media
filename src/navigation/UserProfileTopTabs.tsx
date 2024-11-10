import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {UserProfilePhotos, UserProfileSavedPosts, UserProfileVideos} from '@app/components/userProfile/UserProfileUserPosts';

const Tabs = createMaterialTopTabNavigator();

export const UserProfileTopTabs = () => (
  <Tabs.Navigator pointerEvents='box-none' screenOptions={{
    tabBarScrollEnabled: false
  }}>
    <Tabs.Screen name="UserProfileVideosTab" component={UserProfileVideos} />
    <Tabs.Screen name="UserProfilePhotosTab" component={UserProfilePhotos} />
    <Tabs.Screen name="UserProfileSavedPostsTab" component={UserProfileSavedPosts} />
  </Tabs.Navigator>
);
