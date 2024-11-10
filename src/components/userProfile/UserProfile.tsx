import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {User} from '@app/utils/types';
import {UserProfileImage} from '../userProfile/UserProfileImage';
import {horizontalScale, verticalScale} from '@app/utils/scaling';
import {Heading2} from '../ui/headings.tsx/Heading2';
import Colors from '@app/utils/colors';
import {UserProfileStatistics} from './UserProfileStatistics';
// import {UserProfileTopTabs} from '@app/navigation/UserProfileTopTabs';
import {UserProfilePhotos, UserProfileSavedPosts, UserProfileVideos} from './UserProfileUserPosts';
import {UserProfileTopTabs} from './UserProfileTopTabs';

type PropType = {
  userData: User;
};

export const UserProfile = (props: PropType) => {
  const [activeTab, setActiveTab] = useState(1);

  let TabComponent = null;

  switch(activeTab) {
    case 0:
      TabComponent = <UserProfileVideos />;
      break;
    case 1:
      TabComponent = <UserProfilePhotos userId={props.userData.id}/>;
      break;
    case 2:
      TabComponent = <UserProfileSavedPosts />;
      break;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <UserProfileImage
              picture={props.userData.avatar}
              size={horizontalScale(120)}
              allowFullScreen
            />
          </View>
          <Heading2 weight="bold">
            {props.userData.firstName} {props.userData.lastName}
          </Heading2>
        </View>
        <UserProfileStatistics followers="1M" following="100" posts="540" />
        <View style={styles.separator} />
      </View>
      <UserProfileTopTabs activeTabIndex={activeTab} onPress={setActiveTab} />
      { TabComponent }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: verticalScale(24),
    justifyContent: 'center',
    paddingTop: verticalScale(36),
  },
  header: {
    gap: verticalScale(12),
    alignItems: 'center',
  },
  avatarContainer: {
    width: horizontalScale(128),
    height: horizontalScale(128),
    borderRadius: horizontalScale(128) / 2,
    borderColor: Colors.primary300,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    gap: horizontalScale(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth: horizontalScale(320),
  },
  separator: {
    borderBottomColor: Colors.bg500,
    borderBottomWidth: 1,
    width: '85%',
  },
  verticalSeparator: {
    backgroundColor: Colors.bg500,
    width: 1,
    height: '70%',
  },
});
