'use client';

import { useTabStore } from '@/app/_store/useTabStore';

import RecommendPostList from './RecommendPostList';

import FollowingPostList from './FollowingPostList';

export default function PostFeedTabSwitcher() {
  const { tab } = useTabStore();
  const isSeletorRec = tab === 'recommend';

  return isSeletorRec ? <RecommendPostList /> : <FollowingPostList />;
}
