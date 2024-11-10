import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {UserProfileImage} from '../userProfile/UserProfileImage';
import {Heading3} from '../ui/headings.tsx/Heading3';
import {useScale} from '@app/hooks/useScale';
import { Text } from '../ui/text/Text';
import Colors from '@app/utils/colors';
import { verticalScale } from '@app/utils/scaling';

let STORY_SIZE = 77;

type StoryRenderItemProps = {
  firstName: string;
  lastName: string;
  picture?: string;
  backgroundColor: string;
};

export const StoryRenderItem = (props: StoryRenderItemProps) => {
  const {layoutScale} = useScale();

  useEffect(() => {
    STORY_SIZE = 60 * layoutScale;
  }, [layoutScale]);

  return (
    <View style={styles.story}>
      <View style={styles.storyItemContainer}>
        <View style={styles.storyItem}>
          {props.picture ? (
            <UserProfileImage picture={props.picture} size={STORY_SIZE} />
          ) : (
            <Heading3 weight="semiBold" style={{color: Colors.text700}}>
              {props.firstName[0] + props.lastName[0]}
            </Heading3>
          )}
        </View>
      </View>
      <Text size={10} weight="semiBold">
        {props.firstName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    alignItems: 'center',
    gap: verticalScale(6),
  },
  storyItemContainer: {
    borderRadius: STORY_SIZE / 2,
    height: STORY_SIZE,
    width: STORY_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.primary700,
    padding: 3,
  },
  storyItem: {
    borderRadius: STORY_SIZE / 2,
    backgroundColor: Colors.bg500,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});
