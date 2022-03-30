import Button from "../button/button";
import { TitleWithElementsStyled } from "./titleWithElementsStyled";

const TitleWithElements = ({
  textTitle,
  textSubtitle,
  classForTitle,
  classForSubtitle,
  isButton = false,
  isSubtitle = false,
}) => {
  return (
    <TitleWithElementsStyled>
      <h1 className={`${classForTitle}`}>{textTitle}</h1>
      {isButton ? (
        <div className="wrapperForButton">
          <Button textButton={"Фіз.особа"} classBtn="btnLeft"></Button>
          <Button textButton={"Юр.особа"} classBtn="btnRight"></Button>
        </div>
      ) : null}
      {isSubtitle ? (
        <h2 className={`${classForSubtitle}`}>{textSubtitle}</h2>
      ) : null}
    </TitleWithElementsStyled>
  );
};

export default TitleWithElements;
