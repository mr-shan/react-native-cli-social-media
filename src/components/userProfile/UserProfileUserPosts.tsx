import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import {Text} from '../ui/text/Text';
import {POSTS} from '@app/data/posts';
import Colors from '@app/utils/colors';
import {horizontalScale} from '@app/utils/scaling';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@app/navigation/Routes';
import {Post} from '@app/utils/types';

type PropType = {
  userId: string;
};

export const UserProfileVideos = () => {
  return (
    <View style={styles.container}>
      <Text>No videos found</Text>
    </View>
  );
};

export const UserProfilePhotos = (props: PropType) => {
  const dims = useWindowDimensions();
  const navigation = useNavigation();
  const photos = POSTS.filter(e => e.userId === props.userId);

  const contentWidth = dims.width / 3 - horizontalScale(8);

  const openPostDetails = (postDetails: Post) => {
    navigation.navigate({
      name: ROUTES.PostDetails,
      params: {postId: postDetails.id},
    } as never);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          {width: contentWidth * 3 + horizontalScale(10)},
        ]}>
        {POSTS.map(e => (
          <Pressable key={e.id} onPress={() => openPostDetails(e)}>
            <Image
              style={[
                styles.image,
                {height: contentWidth, width: contentWidth},
              ]}
              resizeMode="cover"
              source={{uri: e.picture}}
            />
          </Pressable>
        ))}
        <Image />
      </View>
    </View>
  );
};

export const UserProfileSavedPosts = () => {
  return (
    <View style={styles.container}>
      <Text>Nothing here..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  imageContainer: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: horizontalScale(4),
  },
  image: {
    borderRadius: 5,
    backgroundColor: Colors.bg500,
  },
});
