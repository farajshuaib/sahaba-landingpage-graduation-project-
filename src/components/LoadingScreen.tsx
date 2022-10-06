import React from "react";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center bg-white dark:text-white text-primary dark:bg-neutral-900 text-neutral-900">
      <i className="text-6xl bx bx-loader-alt bx-spin "></i>
    </div>
  );
};

export default LoadingScreen;
