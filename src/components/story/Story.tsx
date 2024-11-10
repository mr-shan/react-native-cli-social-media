import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Colors from '@app/utils/colors';
import {STORIES} from '@app/data/stories';
import {Story as StoryType} from '@app/utils/types';
import { getUserById } from '@app/data/users';
import { StoryRenderItem } from './StoryRenderItem';
import { horizontalScale, verticalScale } from '@app/utils/scaling';

export const Story = () => {
  const getRenderItem = (story: StoryType) => {
    const user = getUserById(story.userId);
    return (
      <StoryRenderItem
        backgroundColor={user?.profileColor || Colors.bg500}
        firstName={user?.firstName || ''}
        lastName={user?.lastName || ''}
        picture={user?.avatar}
      />
    );
  };

  return (
    <FlatList
      horizontal
      data={STORIES}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={info => getRenderItem(info.item)}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: horizontalScale(16),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(4),
    gap: horizontalScale(16),
  },
});
