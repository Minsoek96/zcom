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
        <NavItemsWrapper $isSelected={isSelected}>
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
  padding-block: 1.2em;
  a {
    display: inline-block;
  }
`;

const NavItemsWrapper = styled.div<{ $isSelected: boolean }>`
  display: inline-flex;
  font-size: 2rem;
  height: 5rem;
  align-items: center;
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'none')};
  padding: 0.6em;

  div {
    margin-inline: 1em;
  }

  svg {
    fill: ${(props) => (props.$isSelected ? props.theme.colors.mainFont : 'none')};
    stroke: ${(props) => props.theme.colors.mainFont};
    stroke-width: 1.5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverEffect};
    border-radius: 2.9rem;
  }

  @media screen and (max-width: 1300px) {
    > div:last-child {
      display: none;
    }
  }
`;
