import { TitleOfHelpsStyled } from "./titleOfHelpsStyled";
import hand from "../../entities/image/hand.jpg";
import wallet from "../../entities/image/wallet.jpg";
import things from "../../entities/image/things.jpg";
import heard from "../../entities/image/heard.jpg";

const TitleOfHelps = ({ classForItem, classForImage }) => {
  return (
    <TitleOfHelpsStyled>
      <div className={`${classForItem} item`}>
        <img
          src={hand}
          className={`${classForImage}`}
          alt="imageWithTypeOfHelps"
        />
        <p>Зрробити</p>
      </div>
      <div className={`${classForItem} item`}>
        <img
          src={wallet}
          className={`${classForImage}`}
          alt="imageWithTypeOfHelps"
        />
        <p className="activeItem">Фінансова допомога</p>
      </div>
      <div className={`${classForItem} item`}>
        <img
          src={things}
          className={`${classForImage}`}
          alt="imageWithTypeOfHelps"
        />
        <p>Матеріальна допомога</p>
      </div>
      <div className={`${classForItem} item`}>
        <img
          src={heard}
          className={`${classForImage}`}
          alt="imageWithTypeOfHelps"
        />
        <p>Волонтерство</p>
      </div>
    </TitleOfHelpsStyled>
  );
};

export default TitleOfHelps;
