import { AuthFormStyled } from "./authFormStyled";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "../../entities/validation/validationSchema";
import Button from "../button/button.js";
import TopContainer from "../containers/topContainer";
import BottomContainer from "../containers/bottomContainer";
import TitleWithElements from "../title/titleWithElements";
import TitleOfHelpsStyled from "../titleOfHelps/titleOfHelps";
import PaymentContainer from "../containers/paymentСontainer";
import PaymentList from "../paymentsList/paymentsList";

const initialState = {
  firstName: "",
  secondName: "",
  nameCompany: "",
  email: "",
  numberPhone: "",
  country: "",
  sity: "",
  region: "",
  address: "",
  indexRegion: "",
  numberCard: "",
  dateCard: "",
  cvvCard: "",
};

const AuthForm = () => {
  const onHandleSubmit = ({
    firstName,
    secondName,
    nameCompany,
    email,
    numberPhone,
    country,
    sity,
    region,
    address,
    indexRegion,
    numberCard,
    dateCard,
    cvvCard,
  }) => {
    console.log("first");
    console.log({
      firstName,
      secondName,
      nameCompany,
      email,
      numberPhone,
      country,
      sity,
      region,
      address,
      indexRegion,
      numberCard,
      dateCard,
      cvvCard,
    });
  };

  return (
    <AuthFormStyled>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => onHandleSubmit(values)}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <div clasName="mainContent">
            <TitleWithElements
              textTitle="Заповніть форму"
              isButton="true"
              classForTitle="mainTitle"
            />
            <Form onSubmit={handleSubmit} className="inputWrapper">
              <TopContainer>
                <div className="wrapperForInput">
                  <div className="groupInput">
                    <div className="inputItem">
                      <label htmlFor="firstName">Ім'я</label>
                      <Field
                        className={`inputForm  ${
                          errors.firstName ? "errorInput" : null
                        } `}
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="errors">{errors.firstName}</div>
                      ) : null}
                    </div>
                    <div className="inputItem">
                      <label htmlFor="secondName">Фамілія</label>
                      <Field
                        className={`inputForm  ${
                          errors.secondName ? "errorInput" : null
                        } `}
                        type="text"
                        name="secondName"
                        onChange={handleChange}
                        value={values.secondName}
                      />
                      {errors.secondName && touched.secondName ? (
                        <div className="errors">{errors.secondName}</div>
                      ) : null}
                    </div>
                  </div>
                  <label htmlFor="nameCompany">
                    Назва компанії, організації
                  </label>

                  <Field
                    className={`inputForm  ${
                      errors.nameCompany ? "errorInput" : null
                    } `}
                    type="text"
                    name="nameCompany"
                    onChange={handleChange}
                    value={values.nameCompany}
                  />
                  {errors.nameCompany && touched.nameCompany ? (
                    <div className="errors">{errors.nameCompany}</div>
                  ) : null}
                  <label htmlFor="email">Email-адрес</label>
                  <Field
                    className={`inputForm  ${
                      errors.email ? "errorInput" : null
                    } `}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="errors">{errors.email}</div>
                  ) : null}
                  <label htmlFor="numberPhone">Номер телефону</label>
                  <Field
                    className={`inputForm  ${
                      errors.numberPhone ? "errorInput" : null
                    } `}
                    type="text"
                    name="numberPhone"
                    onChange={handleChange}
                    value={values.numberPhone}
                  />
                  {errors.numberPhone && touched.numberPhone ? (
                    <div className="errors">{errors.numberPhone}</div>
                  ) : null}
                </div>
                <div className="wrapperForInput">
                  <label htmlFor="country">Країна</label>
                  <Field
                    className={`inputForm  ${
                      errors.country ? "errorInput" : null
                    } `}
                    type="text"
                    name="country"
                    onChange={handleChange}
                    value={values.country}
                  />
                  {errors.country && touched.country ? (
                    <div className="errors">{errors.country}</div>
                  ) : null}
                  <div className="groupInput">
                    <div className="inputItem">
                      <label htmlFor="sity">Місто</label>
                      <Field
                        className={`inputForm  ${
                          errors.sity ? "errorInput" : null
                        } `}
                        type="text"
                        name="sity"
                        onChange={handleChange}
                        value={values.sity}
                      />
                      {errors.sity && touched.sity ? (
                        <div className="errors">{errors.sity}</div>
                      ) : null}
                    </div>
                    <div className="inputItem">
                      <label htmlFor="region">Штат, район</label>
                      <Field
                        className={`inputForm  ${
                          errors.region ? "errorInput" : null
                        } `}
                        type="text"
                        name="region"
                        onChange={handleChange}
                        value={values.region}
                      />
                      {errors.region && touched.region ? (
                        <div className="errors">{errors.region}</div>
                      ) : null}
                    </div>
                  </div>
                  <label htmlFor="address">Адреса</label>
                  <Field
                    className={`inputForm  ${
                      errors.address ? "errorInput" : null
                    } `}
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={values.address}
                  />
                  {errors.address && touched.address ? (
                    <div className="errors">{errors.address}</div>
                  ) : null}
                  <div className="groupInput">
                    <div className="inputItem">
                      <label htmlFor="indexRegion">Поштовий індекс</label>
                      <Field
                        className={`inputForm  ${
                          errors.indexRegion ? "errorInput" : null
                        } `}
                        type="text"
                        name="indexRegion"
                        onChange={handleChange}
                        value={values.indexRegion}
                      />
                      {errors.indexRegion && touched.indexRegion ? (
                        <div className="errors">{errors.indexRegion}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </TopContainer>
              <BottomContainer>
                <TitleWithElements
                  textTitle="Види допомоги"
                  classForTitle="mainTitle"
                  textSubtitle="Ви можете змінити вид допомоги"
                  isSubtitle="true"
                  classForSubtitle="subTitle"
                />
                <TitleOfHelpsStyled />
                <PaymentContainer>
                  <PaymentList />
                  <div className="blockWrapper">
                    <p>Введіть наступні данні</p>
                    <div className="cardWrapper">
                      <label htmlFor="numberCard">Номер картки</label>
                      <Field
                        className={`inputForm  ${
                          errors.numberCard ? "errorInput" : null
                        } `}
                        type="text"
                        name="numberCard"
                        onChange={handleChange}
                        value={values.numberCard}
                      />
                      {errors.numberCard && touched.numberCard ? (
                        <div className="errors">{errors.numberCard}</div>
                      ) : null}
                      <div className="groupInputCard">
                        <div className="inputItem">
                          <label htmlFor="dateCard">Термін дії</label>
                          <Field
                            className={`inputForm  ${
                              errors.dateCard ? "errorInput" : null
                            } `}
                            type="text"
                            name="dateCard"
                            onChange={handleChange}
                            value={values.dateCard}
                          />
                          {errors.dateCard && touched.dateCard ? (
                            <div className="errors">{errors.dateCard}</div>
                          ) : null}
                        </div>
                        <div className="inputItem">
                          <label htmlFor="cvvCard">CVC/CVV</label>
                          <Field
                            className={`inputForm  ${
                              errors.cvvCard ? "errorInput" : null
                            } `}
                            type="text"
                            name="cvvCard"
                            onChange={handleChange}
                            value={values.cvvCard}
                          />
                          {errors.cvvCard && touched.cvvCard ? (
                            <div className="errors">{errors.cvvCard}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </PaymentContainer>
              </BottomContainer>
              <Button
                type="submit"
                textButton={"Допомогти"}
                classBtn={"submitButton"}
              />
            </Form>
          </div>
        )}
      </Formik>
    </AuthFormStyled>
  );
};

export default AuthForm;
