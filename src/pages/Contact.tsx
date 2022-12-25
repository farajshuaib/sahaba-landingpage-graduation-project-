import React, { FC, useState } from "react";
import SectionSubscribe2 from "../components/SectionSubscribe2/SectionSubscribe2";
import SocialsList from "../shared/SocialsList/SocialsList";
import Input from "../shared/Input/Input";
import Textarea from "../shared/Textarea/Textarea";
import ButtonPrimary from "../shared/Button/ButtonPrimary";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import SectionBecomeAnAuthor from "../components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import FormItem from "../components/FormItem";
import { ErrorMessage, Formik } from "formik";
import { contactSchema } from "../services/validations";
import { useApi } from "../hooks/useApi";
import { Alert } from "../shared/Alert/Alert";
import { useTranslation } from "react-i18next";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Tripoli, Libya",
  },
  {
    title: "💌 EMAIL",
    desc: "info@sahabanft.com.ly",
  },
  {
    title: "☎ PHONE",
    desc: "+218 91 162 9062",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();

  const api = useApi();
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <div className="mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          {t("Contact")}
        </h2>
        <div className="container mx-auto max-w-7xl">
          <div className="grid flex-shrink-0 grid-cols-1 gap-12 md:grid-cols-2 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={contactSchema}
              onSubmit={async (values) => {
                setSuccess("");
                setError("");
                try {
                  const { data } = await api.post("/contact", values);
                  setSuccess(data?.message || "Email sent successfully");
                } catch (error: any) {
                  setError(
                    error.response.data.message || "something went wrong"
                  );
                }
              }}
            >
              {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <div>
                  <form className="grid grid-cols-1 gap-6">
                    <FormItem htmlFor="name" label={t("Full name")}>
                      <Input
                        placeholder={t("full_name_placeholder")}
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                        type="text"
                        autoComplete="name"
                        className="mt-1"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </FormItem>
                    <FormItem htmlFor="email" label={t("Email Address")}>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        autoComplete="email"
                        placeholder="example@example.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </FormItem>
                    <FormItem htmlFor="subject" label={t("Subject")}>
                      <Input
                        type="email"
                        id="subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange("subject")}
                        onBlur={handleBlur("subject")}
                        placeholder=""
                      />
                      <ErrorMessage
                        name="subject"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </FormItem>
                    <FormItem htmlFor="message" label={t("Message")}>
                      <Textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange("message")}
                        onBlur={handleBlur("message")}
                        rows={6}
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-sm text-red-500"
                      />
                    </FormItem>
                    <div>
                     {error || success &&  <Alert
                        containerClassName="my-5"
                        type={
                          !!success ? "success" : !!error ? "error" : "default"
                        }
                      >
                        {success || error}
                      </Alert>}

                      <ButtonPrimary
                        loading={isSubmitting}
                        onClick={handleSubmit}
                        type="submit"
                      >
                        {t("Send Message")}
                      </ButtonPrimary>
                    </div>
                  </form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>
        <SectionSubscribe2 className="py-24 lg:py-32" />
      </div>
    </div>
  );
};

export default PageContact;
