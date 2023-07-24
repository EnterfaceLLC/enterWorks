import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import posts from '../../../assets/data/posts.json';
import PostListItem from '@/components/PostListItem';

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <Text>Not Found!</Text>
  }

  return <PostListItem post={post} />;
};
