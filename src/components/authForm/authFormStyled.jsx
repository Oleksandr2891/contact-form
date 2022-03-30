import styled from "styled-components";

export const AuthFormStyled = styled.div`
  .groupInput {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .groupInput .inputForm {
    width: 200px;
  }

  label {
    display: block;
    text-align: left;
    color: #9ea4ad;
    font-family: "Geometria-Bold";
    letter-spacing: 1.1px;
    font-size: 13px;
    padding: 5px 0;
  }

  .wrapperForInput {
    max-width: 500px;
    padding: 30px;
    @media screen and (max-width: 768px) {
      max-width: 300px;
    }
  }

  .inputWrapper {
    width: 100%;
    margin: 24px auto 5px;
    border-radius: 10px;
  }
  .inputForm {
    font-family: "Gilroy-Light";
    color: #363b5d;
    outline: none;
    border: none;
    background-color: #f3f7fa;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    z-index: 300;
    font-size: 16px;
    width: 430px;
    @media screen and (max-width: 768px) {
      width: 200px;
    }

    :active,
    :hover,
    :focus {
      outline: 0;
      outline-offset: 0;
      background: transparent;
    }
  }

  .blockWrapper {
    width: 450px;
    padding: 15px;
    p {
      color: #c1c5ca;
      font-family: "Geometria-Bold";
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      width: 270px;
    }
  }

  .cardWrapper {
    background-color: #c5d5e6;
    border-radius: 10px;
    padding: 18px 30px;
    .inputForm {
      width: 320px;
      @media screen and (max-width: 768px) {
        width: 200px;
      }
    }
  }

  .mainContent {
    display: flex;
  }
  .errors {
    text-align: center;
    max-width: 250px;
    margin-top: 8px;
    color: red;
    font-size: 10px;
  }

  .errorInput {
    color: red !important;
    border-bottom: 1px solid red;
  }

  .groupInputCard {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .inputForm {
      width: 120px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
