import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {faBell} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Colors from '@app/utils/colors';
import {Heading2} from '../ui/headings.tsx/Heading2';
import {Text} from '../ui/text/Text';
import {horizontalScale, verticalScale} from '@app/utils/scaling';
import { ROUTES } from '@app/navigation/Routes';

export const Header = () => {
  const router = useNavigation();

  const notificationRouteHandler = () => {
    router.navigate(ROUTES.Notifications)
  };

  return (
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Heading2 style={{color: Colors.text500}} weight="bold">
          Moments
        </Heading2>
      </View>
      <TouchableOpacity onPress={notificationRouteHandler}>
        <View style={styles.notificationIcon}>
          <FontAwesomeIcon icon={faBell} color={Colors.text500} size={18} />
          <View style={styles.notificationCount}>
            <Text size={10} weight="semiBold" style={{color: 'white'}}>
              14
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(12),
    paddingBottom: verticalScale(6),
  },
  logo: {
    borderRadius: horizontalScale(10),
  },
  notificationIcon: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: horizontalScale(10),
    borderRadius: horizontalScale(20),
    backgroundColor: Colors.bg500,
  },
  body: {
    paddingHorizontal: horizontalScale(16),
  },
  notificationCount: {
    position: 'absolute',
    right: horizontalScale(-4),
    top: verticalScale(-4),
    backgroundColor: Colors.primary700,
    borderRadius: verticalScale(8),
    width: verticalScale(14),
    height: verticalScale(14),
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
