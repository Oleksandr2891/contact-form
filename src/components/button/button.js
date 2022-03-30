import { ButtonWrapper } from "./buttonStyled";

const Button = ({
  onHandleClick,
  textButton,
  classBtn = "add",
  type = "button",
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
