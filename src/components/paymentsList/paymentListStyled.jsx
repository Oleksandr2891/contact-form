import styled from "styled-components";

export const PaymentListStyled = styled.div`
  p {
    color: #c1c5ca;
    font-family: "Geometria-Bold";
    font-size: 14px;
  }
  padding: 15px;
  .itemWrapper {
    display: grid;
    max-width: calc(600px - 36px);
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    grid-gap: 12px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: 0;
    margin-right: auto;
    @media screen and (max-width: 768px) {
      width: 300px;
      max-width: calc(214px - 36px);
    }
  }
`;
