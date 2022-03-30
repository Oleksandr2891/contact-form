import styled from "styled-components";

export const PaymentContainerStyled = styled.div`
  display: flex;
  border: solid 2px #c5d5e6;
  border-radius: 15px;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
  }
`;
