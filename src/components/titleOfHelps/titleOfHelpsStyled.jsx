import styled from "styled-components";

export const TitleOfHelpsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 15px;

  @media screen and (max-width: 1199px) {
    width: 500px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    flex-direction: column;
    align-items: center;
  }

  .item {
    display: flex;
    width: 200px;
    p {
      color: #c5d5e6;
      font-family: "Geometria-Bold";
      margin: auto 5px auto 20px;
      font-size: 16px;
    }
    p.activeItem {
      font-family: "Geometria-ExtraBold";
      color: #363b5d;
    }
  }
`;
