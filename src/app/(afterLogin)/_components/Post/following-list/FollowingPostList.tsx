'use client';

import useFetchFollowings from '@/app/_hooks/useFetchFollowings';

import PostItem from '../post-item/PostItem';

export default function FollowingPostList() {
  const { followings } = useFetchFollowings();

  return followings?.map((post) => <PostItem key={post.postId} post={post} />);
}
