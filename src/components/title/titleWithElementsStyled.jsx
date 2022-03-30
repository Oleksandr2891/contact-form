import styled from "styled-components";

export const TitleWithElementsStyled = styled.div`
  .mainTitle {
    text-align: center;
    color: #363b5d;
    font-family: "Geometria-ExtraBold";
    font-size: 60px;
    margin-bottom: 0px;
    @media screen and (max-width: 768px) {
      font-size: 34px;
    }
  }

  .subTitle {
    text-align: center;
    color: #363b5d;
    font-family: "Gilroy-Light";
    font-size: 18px;
    margin-bottom: 30px;
  }

  .wrapperForButton {
    display: flex;
    justify-content: center;
    padding: 25px;
  }

  button {
    width: 140px;
    height: 38px;
    border: solid 2px #363b5d;
    font-family: "Geometria-Bold";
    margin: 0px;
    font-size: 16px;
  }

  .btnLeft {
    background-color: #363b5d;
    border-radius: 5px 0px 0px 5px;
    color: #ffffff;
  }

  .btnRight {
    background-color: #ffffff;
    border-radius: 0px 5px 5px 0px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
