import { ImagePaymentsItemStyled } from "./imagePaymentsItemStyled";

const ImagePaymentsItem = ({ pathImage }) => {
  return (
    <ImagePaymentsItemStyled>
      <img
        src={pathImage}
        alt="ImagePaymentsItem"
        className="ImagePaymentsItem-image"
      />
    </ImagePaymentsItemStyled>
  );
};

export default ImagePaymentsItem;
