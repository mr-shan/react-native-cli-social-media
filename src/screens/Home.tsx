import React from 'react';

import {Header} from '@app/components/header/Header';
import {Story} from '@app/components/story/Story';
import {Posts} from '@app/components/posts/Post';
import {SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  const PostsHeader = (
    <>
      <Header />
      <Story />
    </>
  );

  return (
    <SafeAreaView style={{backgroundColor: Colors.bg900}}>
      <Posts header={PostsHeader} />
    </SafeAreaView>
  );
};

export default HomeScreen;
