import PostViewList from '@/app/(afterLogin)/_components/Post/PostViewList';
import Header from '@/app/_components/ui/Header';
import CommentForm from '@/app/(afterLogin)/_components/comment/Comment';

// TODO: 아래 commentList로 분리하기 모형 비슷하고 데이터만 변경
export default function PostDetailPage() {
  return (
    <main>
      <Header mainText="게시하기" />
      <PostViewList />
      <CommentForm />
      <PostViewList />
      <PostViewList />
    </main>
  );
}
