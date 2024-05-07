import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { styled } from 'styled-components';

type NavMenuItemProps = {
  path: string;
  name: string;
  Icon: React.ReactNode;
};

function NavMenuItem({ path, name, Icon }: NavMenuItemProps) {
  const pathName = usePathname();
  const { data: me } = useSession();
  const isProfile = path === '/user' && `/${me?.user?.email}`;
  const isSelected = isProfile ? pathName === isProfile : path === pathName;

  return (
    <NavItemsContainer>
      <Link href={isProfile || path}>
        <NavItemsWrapper
          $isSelected={isSelected}
        >
          {Icon}
          <div>{name}</div>
        </NavItemsWrapper>
      </Link>
    </NavItemsContainer>
  );
}

export default NavMenuItem;

const NavItemsContainer = styled.li`
  list-style: none;
  a {
    display: inline-block;
  }

  a:hover {
    background-color: rgba(15, 20, 25, 0.1);
    border-radius: 2.9rem;
  }
`;

const NavItemsWrapper = styled.div<{ $isSelected: boolean }>`
  display: inline-flex;
  font-size: 2rem;
  height: 5rem;
  padding: 0.6em;
  align-items: center;
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'none')};

  div {
    margin-inline: 1em;
  }

  svg {
    fill: ${(props) => (props.$isSelected ? '#000;' : 'none')};
    stroke: #000;
    stroke-width: 1.5px;
  }

  @media screen and (max-width: 1300px) {
    > div:last-child {
      display: none;
    }
  }
`;
