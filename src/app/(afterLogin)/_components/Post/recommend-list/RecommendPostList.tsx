'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

import { Post } from '@/app/_types/Post';

import getPostRecommends from '@/app/_lib/getPostRecommends';

import { Fragment, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import PostItem from '../post-item/PostItem';

// TODO : 포스트 불러오는 훅에 대해서 생각하기
// getPost(type)???

export default function RecommendPostList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<
    Post[],
    Error,
    InfiniteData<Post[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastpage) => lastpage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0.9,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      console.log('진행');
      // eslint-disable-next-line no-unused-expressions
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {data?.pages.map((page, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={i}>
          {page.map((post) => <PostItem key={post.postId} post={post} />)}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
