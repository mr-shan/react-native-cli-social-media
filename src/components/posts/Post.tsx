import React from 'react';

import {Post as PostType} from '@app/utils/types';
import {getUserById} from '@app/data/users';
import {FlatList, StyleSheet, View} from 'react-native';
import {POSTS} from '@app/data/posts';
import {PostRenderItem} from './PostRenderItem';
import Colors from '@app/utils/colors';
import { verticalScale } from '@app/utils/scaling';

export const Posts = ({header}: {header: React.ReactElement}) => {
  const getRenderItem = (postDetails: PostType) => {
    const user = getUserById(postDetails.userId);
    return (
      <PostRenderItem
        avatar={user?.avatar || ''}
        userId={user?.id || ''}
        postDetails={postDetails}
        userName={user?.firstName + ' ' + user?.lastName}
      />
    );
  };

  const getListSeparatorItem = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={POSTS}
      ListHeaderComponent={header}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={info => getRenderItem(info.item)}
      ItemSeparatorComponent={getListSeparatorItem}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: verticalScale(8),
  },
  separator: {
    backgroundColor: Colors.bg500,
    margin: 'auto',
    marginTop: verticalScale(4),
    width: '90%',
    height: 1,
  },
});
