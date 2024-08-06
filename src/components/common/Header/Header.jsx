import React from 'react';
import { HeaderWrapper, Overlay, Container, HeaderTitle } from './styles';

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <Overlay />
      <Container>
        <HeaderTitle>{title}</HeaderTitle>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
