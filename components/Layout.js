import styled from "styled-components";

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: calc(${(props) => props.theme.gap} * 20) min-content 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: flex-end;
`;

const Layout = () => (
  <Container>
    <header>I am the header</header>
    <Main>
      I am the main content. Bear claw marshmallow chocolate sesame snaps apple pie cheesecake halvah.
      Candy cookie wafer jelly beans pastry tootsie roll chocolate bar biscuit.
      Marshmallow candy gummi bears pie chocolate cake powder. Brownie donut
      shortbread bear claw marshmallow. Cookie chupa chups croissant bear claw
      gummi bears jelly-o toffee muffin sugar plum. Carrot cake dessert chupa
      chups gummi bears danish chocolate bar dragée. Muffin marshmallow muffin
      sugar plum macaroon pastry. Dessert chocolate biscuit sesame snaps
      macaroon candy candy canes. Gummi bears sweet roll pastry toffee brownie.
      Cake brownie apple pie cookie carrot cake. Caramels gummi bears lemon
      drops chocolate bar sweet roll muffin powder muffin. Soufflé marshmallow
      pudding marzipan brownie sesame snaps donut oat cake. Jujubes pie macaroon
      pastry tootsie roll chocolate bar jelly bonbon. Candy toffee chocolate
      marzipan gummies cake danish caramels. Dragée donut gummies pie wafer
    </Main>
    <Footer>
      I am the Footer Caramels gummi bears lemon drops chocolate bar sweet roll
      muffin powder muffin. Soufflé marshmallow pudding marzipan brownie sesame
      snaps donut oat cake. Jujubes pie macaroon pastry tootsie roll chocolate
      bar jelly bonbon. Candy toffee chocolate marzipan gummies cake danish
      caramels. Dragée donut gummies pie wafer
    </Footer>
  </Container>
);

export default Layout;
