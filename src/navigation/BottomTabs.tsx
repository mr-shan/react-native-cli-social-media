import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';

import ProfileScreen from '@app/screens/Profile';
import Colors from '@app/utils/colors';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useScale} from '@app/hooks/useScale';
import { verticalScale } from '@app/utils/scaling';
import NewPostScreen from '@app/screens/NewPost';
import {HomeNavigation} from './HomeNavigation';

const Tabs = createBottomTabNavigator();

const TabBarIcon = ({
  icon,
  focused,
  size,
}: {
  icon: IconProp;
  focused: boolean;
  size: number;
}) => {
  const {fontScale, normalizeFontSize} = useScale();

  let iconSize = (size / 1.5) * Math.min(fontScale, 1.5);
  iconSize = normalizeFontSize(iconSize);

  return (
    <FontAwesomeIcon
      icon={icon}
      size={iconSize}
      color={focused ? Colors.text500 : Colors.textInactive}
    />
  );
};

const BottomTabs = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabel: '',
      tabBarStyle: {
        // height: verticalScale(54),
        paddingTop: verticalScale(4),
        backgroundColor: Colors.bg900,
        // borderTopColor: Colors.bg300,
      },
    }}>
    <Tabs.Screen
      options={{
        tabBarIcon: ({focused, size}) =>
          TabBarIcon({icon: faHome, focused, size}),
      }}
      name="HomeTab"
      component={HomeNavigation}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({focused, size}) =>
          TabBarIcon({icon: faAdd, focused, size}),
      }}
      name="NewPostTab"
      component={NewPostScreen}
    />
    <Tabs.Screen
      name="ProfileTab"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({focused, size}) =>
          TabBarIcon({icon: faUser, focused, size}),
      }}
    />
  </Tabs.Navigator>
);

export default BottomTabs;
