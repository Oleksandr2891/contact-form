import * as yup from "yup";
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Вкажіть, будь ласка, коректне ім'я")
    .required("Вкажіть, будь ласка, своє ім'я"),
  secondName: yup
    .string()
    .min(3, "Вкажіть, будь ласка, коректне прізвище")
    .required("Вкажіть, будь ласка, своє прізвище"),
  nameCompany: yup
    .string()
    .min(2, "Вкажіть, будь ласка, ім'я компанії або організації")
    .required(
      "Вкажіть, будь ласка, ім'я компанії своєї компаній або організації"
    ),
  email: yup
    .string()
    .email("Вкажіть, будь ласка, коректну поштову скриньку")
    .required("Вкажіть, будь ласка, свою поштову скриньку"),
  numberPhone: yup
    .number()
    .min(7, "Вкажіть, будь ласка, коректний номер телефону")
    .required("Вкажіть, будь ласка, свою поштову скриньку"),
  country: yup
    .string()
    .min(3, "Вкажіть, будь ласка, коректну назву країни")
    .required("Вкажіть, будь ласка, назву своєї країни"),
  sity: yup
    .string()
    .min(2, "Вкажіть, будь ласка, коректну назву міста")
    .required("Вкажіть, будь ласка, назву свого міста"),
  region: yup
    .string()
    .min(2, "Вкажіть, будь ласка, коректну назву штату або району")
    .required("Вкажіть, будь ласка, назву свою штату або району"),
  address: yup
    .string()
    .min(3, "Вкажіть, будь ласка, коректну адресу")
    .required("Вкажіть, будь ласка, свою адресу"),
  indexRegion: yup
    .string()
    .min(3, "Вкажіть, будь ласка, коректну індекс")
    .required("Вкажіть, будь ласка, свій індекс"),
  numberCard: yup
    .number()
    .min(3, "Вкажіть, будь ласка, коректну номер картки")
    .required("Вкажіть, будь ласка, номер своєї картки"),
  dateCard: yup
    .date()
    .min(4, "Вкажіть, будь ласка, коректну дату закінчення дії картки")
    .required("Вкажіть, будь ласка, дату закінчення дії своєї картки"),
  cvvCard: yup
    .number()
    .min(3, "Вкажіть, будь ласка, коректний CVV код")
    .required("Вкажіть, будь ласка, СММ код своєї картки"),
  //   password: yup
  //     .string()
  //     .required("Вкажіть, будь ласка, свій пароль")
  //     .min(6, "Пароль має містити не менше 6 символів")
  //     .max(16, "Пароль має бути не більше 16 символів")
  //     .matches(
  //       /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
  //       "Пароль повинен містити символи латинского алфавіту, прописні та заглавні букви та цифри"
  //     ),
});

export { validationSchema };
