import React from "react";
import { Suspense } from "react";
import Loading from "../../../../public/assets/Loading.svg";
const SuspenseFallback = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          {/* please wait while loading... */}
          <img src={Loading} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
export default SuspenseFallback;
