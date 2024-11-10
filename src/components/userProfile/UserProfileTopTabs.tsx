import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {horizontalScale, verticalScale} from '@app/utils/scaling';
import {Text} from '../ui/text/Text';
import Colors from '@app/utils/colors';

type UserProfileTabItemPropType = {
  isActive: boolean;
  label: string;
  onPress: () => void;
};

const UserProfileTabItem = (props: UserProfileTabItemPropType) => (
  <TouchableOpacity style={styles.topTabItemContainer} onPress={props.onPress}>
    <Text
      size={12}
      weight={props.isActive ? 'bold' : 'semiBold'}
      style={{color: props.isActive ? Colors.text500 : Colors.textInactive}}>
      {props.label}
    </Text>
  </TouchableOpacity>
);

type PropType = {
  activeTabIndex: number;
  onPress: (index: number) => void;
};

export const UserProfileTopTabs = (props: PropType) => {
  return (
    <View style={styles.topTabsContainer}>
      <UserProfileTabItem
        isActive={props.activeTabIndex === 0}
        label="Videos"
        onPress={() => props.onPress(0)}
      />
      <UserProfileTabItem
        isActive={props.activeTabIndex === 1}
        label="Photos"
        onPress={() => props.onPress(1)}
      />
      <UserProfileTabItem
        isActive={props.activeTabIndex === 2}
        label="Saved"
        onPress={() => props.onPress(2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topTabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: horizontalScale(320),
    alignSelf: 'center',
  },
  topTabItemContainer: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: verticalScale(24),
  },
});
