import React from 'react';
import {StyleSheet, View} from 'react-native';

import {horizontalScale} from '@app/utils/scaling';
import Colors from '@app/utils/colors';
import {UserProfileStatItem} from './UserProfileStatItem';

type PropType = {
  following: string;
  followers: string;
  posts: string;
};

export const UserProfileStatistics = (props: PropType) => (
  <View style={styles.statsContainer}>
    <UserProfileStatItem label="Following" count={props.following} />
    <View style={styles.verticalSeparator} />
    <UserProfileStatItem label="Followers" count={props.followers} />
    <View style={styles.verticalSeparator} />
    <UserProfileStatItem label="Posts" count={props.posts} />
  </View>
);

const styles = StyleSheet.create({
  statsContainer: {
    gap: horizontalScale(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: horizontalScale(320),
  },
  verticalSeparator: {
    backgroundColor: Colors.bg500,
    width: 1,
    height: '70%',
  },
});
