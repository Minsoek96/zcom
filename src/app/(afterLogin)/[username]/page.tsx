import Header from '@/app/_components/ui/Header';

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import getUserServer from '@/app/_lib/getUserServer';
import getUserPosts from '@/app/_lib/getUserPosts';

import ProfilBody from '../_components/profil/ProfilBody';

import { Container } from './_styled';
import UserPostList from '../_components/post/userpost-list/UserPostList';

type ProfileProps = {
  params: { username: string };
};
async function Profil({ params }: ProfileProps) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users', username],
    queryFn: getUserServer,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
  });
  const dyhydratedState = dehydrate(queryClient);

  return (
    <Container>
      <HydrationBoundary state={dyhydratedState}>
        <Header mainText={username} />
        <ProfilBody />
        <UserPostList username={username} />
      </HydrationBoundary>
    </Container>
  );
}

export default Profil;
