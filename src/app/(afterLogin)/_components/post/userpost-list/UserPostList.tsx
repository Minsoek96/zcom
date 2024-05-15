'use client';

import useFetchUserPosts from '@/app/_hooks/useFetchUserPosts';

import PostItem from '../post-item/PostItem';

type UserPostListProps = {
  username: string;
};
export default function UserPostList({ username }: UserPostListProps) {
  const { userPosts, isUser } = useFetchUserPosts({ username });

  if (isUser) {
    return userPosts?.map((post) => <PostItem key={post.postId} post={post} />);
  }
  return null;
}
