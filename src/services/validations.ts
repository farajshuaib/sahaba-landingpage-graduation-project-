import { t } from "i18next";
import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required(t("Name is required")),
  email: yup.string().email().required(t("Email is required")),
  subject: yup.string().required(t("Subject is required")),
  message: yup.string().required(t("Message is required")),
});
