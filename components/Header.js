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
  padding: ${(props) => props.showMobileMenu === false && "16px"};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 60%;
  }
`;

const Logo = styled.div`
  width: 43px;
  height: 49px;
  border: 5px solid ${(props) => props.theme.colors.pink};
`;

const MobileMenuContainer = styled.div`
  background: ${(props) => props.theme.colors.yellow};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Header = () => {
  const { isMobile } = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <StyledHeader showMobileMenu={showMobileMenu}>
      {isMobile ? (
        !showMobileMenu && (
          <>
            <Logo />
            <div
              onClick={() => {
                setShowMobileMenu(true);
              }}
            >
              <Menu />
            </div>
          </>
        )
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
        <MobileMenuContainer>
            <button onClick={() => setShowMobileMenu(false)}>Close Me</button>
            <Moon />
          <List>
            {menuItems.map((item) => (
              <li key={item}>{item.label}</li>
            ))}
          </List>
        </MobileMenuContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
