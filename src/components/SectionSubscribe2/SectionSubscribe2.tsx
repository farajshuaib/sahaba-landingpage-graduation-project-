import React, { FC, useState } from "react";
import ButtonCircle from "../../shared/Button/ButtonCircle";
import rightImg from "../../assets/images/SVG-subcribe2.png";
import NcImage from "../../shared/NcImage/NcImage";
import Badge from "../../shared/Badge/Badge";
import Input from "../../shared/Input/Input";
import { useApi } from "../../hooks/useApi";
import { Alert } from "../../shared/Alert/Alert";

export interface SectionSubscribe2Props {
  className?: string;
}

interface AlertType {
  type: "success" | "error";
  message: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [alert, setAlert] = useState<AlertType | null>(null);

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setAlert(null);
    setLoading(true);
    try {
      const { data } = await api.post("/subscribe", { email });
      setLoading(false);
      setAlert({ type: "success", message: data.message });
    } catch (e: any) {
      setLoading(false);
      setAlert({ type: "error", message: e.response.data.message });
    }
  };

  const _renderLoading = () => {
    return (
      <svg
        className="w-5 h-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  const _renderIconRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
    </svg>
  );

  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="text-4xl font-semibold">Never miss a drop!</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Subcribe to our super-exclusive drop list and be the first to know
          abour upcoming drops
        </span>
        <ul className="mt-10 space-y-4">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium magazines
            </span>
          </li>
        </ul>
        <form onSubmit={submit} className="relative max-w-sm mt-10">
          <Input
            required
            aria-required
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            rounded="rounded-full"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform -translate-y-1/2 top-1/2 right-1"
          >
            {loading ? _renderLoading() : _renderIconRight()}
          </ButtonCircle>
        </form>
        {alert && <Alert type={alert.type}>{alert.message}</Alert>}
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
