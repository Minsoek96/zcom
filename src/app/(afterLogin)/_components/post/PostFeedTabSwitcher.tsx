'use client';

import { useTabStore } from '@/app/_store/useTabStore';

import RecommendPostList from './recommend-list/RecommendPostList';

import FollowingPostList from './following-list/FollowingPostList';

export default function PostFeedTabSwitcher() {
  const { tab } = useTabStore();
  const isSeletorRec = tab === 'recommend';

  return isSeletorRec ? <RecommendPostList /> : <FollowingPostList />;
}
