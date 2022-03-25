import { useState } from "react";
import styled from "styled-components";

import { useIsMobile } from "hooks/useIsMobile";
import { Menu, Moon } from "components/SVG";

const menuItems = [
  { path: "#", label: "Home" },
  { path: "#", label: "Guestbook" },
  { path: "#", label: "Talks" },
  { path: "#", label: "Dashboard" },
  { path: "#", label: "More About Me" },
];

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 60%;
  }
`;

const Logo = styled.div`
  width: 43px;
  height: 49px;
  border: 5px solid ${(props) => props.theme.colors.pink};
`;

const Header = () => {
  const { isMobile } = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <StyledHeader>
      {isMobile ? (
        <>
          <Logo />
          <div
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            <Menu />
          </div>
        </>
      ) : (
        <>
          <List>
            {menuItems.map((item) => (
              <li key={item}>{item.label}</li>
            ))}
          </List>
          <Moon />
        </>
      )}

      {isMobile && showMobileMenu && (
        <List>
          {menuItems.map((item) => (
            <li key={item}>{item.label}</li>
          ))}
        </List>
      )}
    </StyledHeader>
  );
};

export default Header;
