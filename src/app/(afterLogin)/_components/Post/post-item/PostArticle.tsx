import { Post } from '@/app/_types/Post';
import { useRouter } from 'next/navigation';
import React from 'react';

type PostArticleProps = {
    post : Post
    children: React.ReactNode
}
function PostArticle({ post, children }:PostArticleProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article onClick={handleNavigate}>
      {children}
    </article>
  );
}

export default PostArticle;
