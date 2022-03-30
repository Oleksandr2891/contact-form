import styled from "styled-components";

export const MainContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto 0;

  @media screen and (max-width: 1199px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;
