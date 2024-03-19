import { styled } from "styled-components";

import NavMenuItem from "./NavMenuItem";

import { menuItems } from "../../_constants/menuItems";

const NavMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;

  li:last-child {
    margin-bottom: 8px;
  }
`;

const NavMenuList = () => {

  return (
    <NavMenuContainer>
      {menuItems.map((a) => (
        <NavMenuItem
         key={a.name} 
         path={a.path} 
         name={a.name}
         Icon={a.svg} />
      ))}
    </NavMenuContainer>
  );
};

export default NavMenuList;
