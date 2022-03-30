import styled from "styled-components";

export const ButtonWrapper = styled.div`
  cursor: pointer;
  .submitButton {
    display: inline-flex;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #ffffff;
    font-family: "Geometria-Bold";
    font-size: 18px;
    display: block;
    margin: 0px auto 100px auto;
    padding: 10px 80px;
    border-radius: 5px;
    border: none;
    background: rgb(229, 54, 86);
    background: linear-gradient(
      90deg,
      rgba(229, 54, 86, 1) 0%,
      rgba(139, 105, 173, 1) 100%
    );
    box-shadow: 4px -2px 27px 6px rgba(229, 54, 106, 0.56);
  }

  .submitButton:hover,
  .submitButton:active,
  .submitButton:focus {
    box-shadow: 2px 0px 16px 6px rgba(98, 45, 219, 0.7);
  }
  .submitButton:before {
    content: "";
    position: absolute;
    top: 0;
    right: -50px;
    bottom: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-top: 50px solid #363b5d;
    transition: transform 0.5s;
    transform: translateX(-100%);
    z-index: -1;
  }
  .submitButton:hover:before,
  .submitButton:active:before,
  .submitButton:focus:before {
    transform: translateX(0);
  }
`;
