import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  height: 9.25rem;
  background-size: cover;
  background-image: url("./assets/Asset_Main.jpg");
  background-position: center center;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
