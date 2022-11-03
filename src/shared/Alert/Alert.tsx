import React from "react";
import ButtonClose from "../ButtonClose/ButtonClose";

export interface AlertProps {
  containerClassName?: string;
  type?: "default" | "warning" | "info" | "success" | "error";
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  children = "Alert Text",
  containerClassName = "",
  type = "default",
}) => {
  let classes = containerClassName;
  switch (type) {
    case "default":
      classes += " text-black bg-neutral-900";
      break;
    case "info":
      classes += " bg-status-infoBg text-status-info";
      break;
    case "success":
      classes += " bg-green-100 text-green-600";
      break;
    case "error":
      classes += " bg-red-100 text-red-600";
      break;
    case "warning":
      classes += " bg-status-warningBg text-status-warning";
      break;
    default:
      break;
  }

  return (
    <div
      className={`ttnc-alert relative my-5 flex items-center text-paragraph-base px-6 pt-4 pb-3 rounded-lg ${classes}`}
    >
      {children}
      {/* <ButtonClose className="absolute top-4 right-6" /> */}
    </div>
  );
};
