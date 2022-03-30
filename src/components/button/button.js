import { ButtonWrapper } from "./buttonStyled";

const Button = ({
  onHandleClick,
  textButton,
  //   icon = "add",
  classBtn = "add",
  type = "button",

  //   background = "",
}) => {
  return (
    <ButtonWrapper>
      <button className={`${classBtn}`} onClick={onHandleClick} type={type}>
        {textButton}
      </button>
    </ButtonWrapper>
  );
};
export default Button;
