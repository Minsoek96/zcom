import Link from "next/link";

import { usePathname } from "next/navigation";

import { styled } from "styled-components";

const NavItemsContainer = styled.li`
  list-style: none;
  a {
    display: inline-block;
  }

  a:hover {
    background-color: rgba(15, 20, 25, 0.1);
    border-radius: 29px;
  }
`;

const NavItemsWrapper = styled.div<{ $isSelected: boolean }>`
  display: inline-flex;
  height: 50px;
  padding: 12px;
  align-items: center;
  font-size: 19px;
  font-weight: ${props => props.$isSelected ? 'bold' : 'none'};

  div {
    margin-inline: 20px;
  }

  svg {
    fill: ${props => props.$isSelected ? '#000;': 'none'};
    stroke: #000;
    stroke-width : 1.5px;
  }
`;

type NavMenuItemProps = {
  path: string;
  name: string;
  Icon: React.ReactNode;
};

const NavMenuItem = ({ path, name, Icon }: NavMenuItemProps) => {
  const pathName = usePathname();

  return (
    <NavItemsContainer>
      <Link href={path}>
        <NavItemsWrapper $isSelected={pathName===path}>
          {Icon}
          <div>{name}</div>
        </NavItemsWrapper>
      </Link>
    </NavItemsContainer>
  );
};

export default NavMenuItem;
