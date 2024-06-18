'use client';

import { Fragment, useCallback } from 'react';

import useFetchTypePosts from '@/app/_hooks/useFetchTypePosts';
import useObserver from '@/app/_hooks/useObserver';
import PostItem from '../post-item/PostItem';

// TODO : 포스트 불러오는 훅에 대해서 생각하기
// getPost(type)???

export default function RecommendPostList() {
  const {
    infinitePosts, isFetching, hasNextPage, fetchNextPage,
  } = useFetchTypePosts({ type: 'recommends' });

  const handleCallback = useCallback(() => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetching, hasNextPage]);

  const { ref } = useObserver({ callback: handleCallback, threshold: 0.9 });

  return (
    <>
      {infinitePosts?.pages.map((page, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={i}>
          {page.map((post) => (
            <PostItem key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
