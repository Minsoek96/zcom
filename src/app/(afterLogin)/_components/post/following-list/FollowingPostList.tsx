'use client';

import { Fragment, useCallback } from 'react';

import useFetchTypePosts from '@/app/_hooks/useFetchTypePosts';

import useObserver from '@/app/_hooks/useObserver';
import PostItem from '../post-item/PostItem';

export default function FollowingPostList() {
  const {
    infinitePosts, isFetching, hasNextPage, fetchNextPage,
  } = useFetchTypePosts({ type: 'follow' });

  const handleCallback = useCallback(() => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, []);

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
