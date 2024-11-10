import React from 'react';
import {StyleSheet, View} from 'react-native';

import {verticalScale} from '@app/utils/scaling';
import {Text} from '../ui/text/Text';
import Colors from '@app/utils/colors';

type PropType = {
  label: string;
  count: string;
};

export const UserProfileStatItem = (props: PropType) => (
  <View style={styles.statItem}>
    <Text size={16} weight="bold">
      {props.count}
    </Text>
    <Text size={12} weight="semiBold" style={{color: Colors.text100}}>
      {props.label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  statItem: {
    gap: verticalScale(4),
    alignItems: 'center',
  },
});
