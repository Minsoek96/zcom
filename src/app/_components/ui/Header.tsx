'use client';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import { BackIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

type HeaderProps = {
  mainText: string|React.ReactNode;
};

function Header({ mainText }: HeaderProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Container>
      <div>
        <div onClick={handleBackClick}>
          <BackIcon />
        </div>
      </div>
      <div>
        {mainText}
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 15px;
  height: 50px;
  background-color: white;

  > div:first-child {
    width: 53px;
    > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;

      &:hover {
        background-color: rgba(15, 20, 25, 0.1);
        border-radius: 9999px;
      }
    }
  }

  > div:nth-child(2) {
    font-weight: 700;
    font-size: 19px;
  }
`;
