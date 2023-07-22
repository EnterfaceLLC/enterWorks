import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import posts from '../../../assets/data/posts.json';
import PostListItem from '@/components/PostListItem';

export default function HomeFeed() {
  return <PostListItem post={posts[0]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
