import styled from "styled-components";

export const TopContainerStyled = styled.div`
  display: block;
  text-align: center;
  margin: 0px 70px 20px;

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1199px) {
    margin: 0px auto 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
