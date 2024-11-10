import Colors from '@app/utils/colors';
import React from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';

type PropType = {
  picture: string;
  size: number;
  allowFullScreen?: boolean;
};

export const UserProfileImage = (props: PropType) => {
  const [showFullScreenImage, setShowFullScreenImage] = React.useState(false);

  const image = (
    <Image
      height={props.size}
      width={props.size}
      borderRadius={props.size / 2}
      resizeMode="cover"
      source={{uri: props.picture || ''}}
    />
  );

  if (!props.allowFullScreen) {
    return image;
  }

  return (
    <>
      <Pressable
        onPress={() => setShowFullScreenImage(true && !!props.allowFullScreen)}>
        { image }
      </Pressable>
      <Modal visible={showFullScreenImage} transparent animationType="fade">
        <Pressable
          onPress={() => setShowFullScreenImage(false)}
          style={styles.fullScreenImageContainer}>
          <ImageBackground
            source={{uri: props.picture}}
            resizeMode="contain"
            style={styles.fullScreenImage}
          />
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
});
