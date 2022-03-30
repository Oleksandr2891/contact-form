import styled from "styled-components";

export const BottomContainerStyled = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin: 0px 100px 50px;
  }

  @media screen and (max-width: 1199px) {
    margin: 0px auto 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
