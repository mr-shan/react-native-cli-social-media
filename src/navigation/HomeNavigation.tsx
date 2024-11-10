import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './Routes';
import HomeScreen from '@app/screens/Home';
import NotificationsScreen from '@app/screens/Notifications';
import Colors from '@app/utils/colors';
import ProfileScreen from '@app/screens/Profile';
import PostDetailsScreen from '@app/screens/PostDetails';

const Stack = createNativeStackNavigator();

export const HomeNavigation = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.Home}
    screenOptions={{
      contentStyle: {
        backgroundColor: Colors.bg900,
      },
      headerStyle: {
        backgroundColor: Colors.bg900,
      },
      headerTintColor: Colors.text500,
    }}>
    <Stack.Screen
      name={ROUTES.Home}
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={ROUTES.Notifications} options={{ presentation: 'modal' }} component={NotificationsScreen} />
    <Stack.Screen
      name={ROUTES.Profile}
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.PostDetails}
      component={PostDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
