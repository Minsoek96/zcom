'use client';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import { BackIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

type HeaderProps = {
  mainText: string | React.ReactNode;
  action?: {
    node: React.ReactNode;
  } | null;
};

function Header({ mainText, action = null }: HeaderProps) {
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
      <div>{mainText}</div>
      {action && action.node}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding-inline: 1.5em;
  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

  > div:first-child {
    width: 5.3rem;
    > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 3.2rem;
      height: 3.2rem;

      svg {
        fill: ${(props) => props.theme.colors.mainFont};
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.hoverEffect};
        border-radius: 9999px;
      }
    }
  }

  > div:nth-child(2) {
    font-weight: 700;
    font-size: 1.9rem;
  }

  > div:nth-child(3) {
    position: absolute;
    right: 2rem;
    display: flex;

    svg {
      fill : ${(props) => props.theme.colors.mainFont}
    }
  }
`;
