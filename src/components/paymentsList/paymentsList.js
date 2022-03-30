import { PaymentListStyled } from "./paymentListStyled";
import paypal from "../../entities/image/paypal.jpg";
import privat from "../../entities/image/privat.jpg";
import terminals from "../../entities/image/terminals.jpg";
import visa from "../../entities/image/visa.jpg";
import webmoney from "../../entities/image/webmoney.jpg";
import ImagePaymentsItem from "./imagePaymentsItem";

const PaymentList = () => {
  const arrImagePayments = [paypal, privat, terminals, visa, webmoney];
  return (
    <PaymentListStyled>
      <p>Спосіб оплати</p>
      <div className="itemWrapper">
        {arrImagePayments &&
          arrImagePayments.map((item) => {
            return <ImagePaymentsItem key={item} pathImage={item} />;
          })}
      </div>
    </PaymentListStyled>
  );
};

export default PaymentList;
