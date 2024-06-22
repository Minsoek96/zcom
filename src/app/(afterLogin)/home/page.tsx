import Container from '@/app/(afterLogin)/home/_style/Container';
import Tab from '../_components/tab/Tab';
import PostForm from '../_components/post/form/PostForm';
import AsyncTabContent from '../_components/post/AsyncTabContent';

export default async function Home() {
  return (
    <Container>
      <Tab />
      <PostForm />
      <AsyncTabContent />
    </Container>
  );
}
