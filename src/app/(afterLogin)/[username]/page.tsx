'use client';

import Header from '@/app/_components/ui/Header';
import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';
import ProfilBody from '../_components/Profil/ProfilBody';

function Profil() {
  const name = usePathname();
  return (
    <Container>
      <Header mainText={name} />
      <ProfilBody />
    </Container>
  );
}

export default Profil;

const Container = styled.div`
  border-bottom: 1px solid rgba(15, 20, 25, 0.1);
`;
