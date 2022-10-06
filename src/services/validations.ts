import * as yup from "yup";


export const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
