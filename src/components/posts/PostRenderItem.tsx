import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Modal,
} from 'react-native';

import {Post as PostType} from '@app/utils/types';
import {UserProfileImage} from '../userProfile/UserProfileImage';
import {Text} from '../ui/text/Text';
import Colors from '@app/utils/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {horizontalScale, verticalScale} from '@app/utils/scaling';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@app/navigation/Routes';

const AVATAR_SIZE = 44;

type PropType = {
  postDetails: PostType;
  userId: string;
  userName: string;
  avatar: string;
  isFullScreen?: boolean;
  onPress?: () => void;
};

export const PostRenderItem = (props: PropType) => {
  const navigation = useNavigation();
  const [showFullScreenImage, setShowFullScreenImage] = React.useState(false);

  const openUserProfile = () => {
    navigation.navigate({
      name: ROUTES.Profile,
      params: {userId: props.userId},
    } as never);
  };

  const openPostDetails = () => {
    if (props.isFullScreen) {
      return;
    }
    navigation.navigate({
      name: ROUTES.PostDetails,
      params: {postId: props.postDetails.id},
    } as never);
  };

  let image = null;

  if (props.isFullScreen) {
    image = (
      <Pressable onPress={() => setShowFullScreenImage(true)}>
        <Image
          source={{uri: props.postDetails.picture}}
          resizeMode="contain"
          style={styles.fullImage}
        />
      </Pressable>
    );
  } else {
    image = (
      <Pressable onPress={openPostDetails}>
        <Image
          source={{uri: props.postDetails.picture}}
          resizeMode="cover"
          style={styles.image}
        />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.storyItem} onPress={openUserProfile}>
          <UserProfileImage picture={props.avatar} size={AVATAR_SIZE - 6} />
        </Pressable>
        <View style={{gap: verticalScale(1)}}>
          <TouchableOpacity onPress={openUserProfile}>
            <Text size={12} weight="bold">
              {props.userName}
            </Text>
          </TouchableOpacity>
          <Text
            style={{color: Colors.text100, marginBottom: verticalScale(2)}}
            size={10}
            weight="medium">
            {props.postDetails.location}
          </Text>
        </View>
        <TouchableOpacity style={{padding: 5, marginLeft: 'auto'}}>
          <FontAwesomeIcon icon={faEllipsis} color={Colors.text300} size={18} />
        </TouchableOpacity>
      </View>
      {image}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <FontAwesomeIcon icon={faHeart} color={Colors.text300} size={18} />
          <Text size={10} weight="medium" style={{color: Colors.text300}}>
            {props.postDetails.likes}
          </Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesomeIcon icon={faMessage} color={Colors.text300} size={16} />
          <Text size={10} weight="medium" style={{color: Colors.text300}}>
            {props.postDetails.likes}
          </Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesomeIcon icon={faBookmark} color={Colors.text300} size={16} />
          <Text size={10} weight="medium" style={{color: Colors.text300}}>
            {props.postDetails.saves}
          </Text>
        </View>
      </View>
      <Modal visible={showFullScreenImage} transparent animationType="fade">
        <Pressable
          onPress={() => setShowFullScreenImage(false)}
          style={styles.fullScreenImageContainer}>
          <ImageBackground
            source={{uri: props.postDetails.picture}}
            resizeMode="contain"
            style={styles.fullScreenImage}
          />
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  storyItem: {
    borderRadius: AVATAR_SIZE / 2,
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary700,
    padding: 3,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    backgroundColor: Colors.bg500,
  },
  fullImage: {
    width: Dimensions.get('screen').width - horizontalScale(32),
    height: Dimensions.get('screen').height / 1.75,
    borderRadius: 12,
    backgroundColor: Colors.bg500,
  },
  fullScreenImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  fullScreenImage: {
    height: '100%',
    width: '100%',
    margin: 'auto',
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(4),
    paddingVertical: verticalScale(4),
    gap: horizontalScale(20),
  },
  footerItem: {
    flexDirection: 'row',
    gap: horizontalScale(4),
    alignItems: 'center',
  },
});
