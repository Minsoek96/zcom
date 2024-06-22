'use client';

import { Fragment, useCallback } from 'react';

import useFetchTypePosts from '@/app/_hooks/useFetchTypePosts';
import useObserver from '@/app/_hooks/useObserver';
import Spinner from '@/app/_components/ui/Spinner';
import PostItem from '../post-item/PostItem';

// TODO : 포스트 불러오는 훅에 대해서 생각하기
// getPost(type)???

type PostListProps = {
  postType: 'recommends' | 'follow';
};
export default function TypePostList({ postType }: PostListProps) {
  const {
    infinitePosts, isFetching, hasNextPage, fetchNextPage, isLoading,
  } = useFetchTypePosts({ type: postType });

  const handleCallback = useCallback(() => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetching, hasNextPage]);

  const { ref } = useObserver({ callback: handleCallback, threshold: 0.9 });

  if (isLoading) {
    return <Spinner />;
  }

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
