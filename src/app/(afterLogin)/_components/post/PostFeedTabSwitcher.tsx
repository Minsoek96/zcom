'use client';

import { useTabStore } from '@/app/_store/useTabStore';

import TypePostList from './typepost-list/TypePostList';

export default function PostFeedTabSwitcher() {
  const { tab } = useTabStore();
  const isSeletorRec = tab === 'recommend';

  return <TypePostList postType={isSeletorRec ? 'recommends' : 'follow'} />;
}
