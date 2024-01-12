import { ReactNode } from "react";

const Feature = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-6">
      <div className="flex size-14 items-center justify-center rounded-full bg-primary">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 font-Playfair text-2xl font-semibold">
          Robust Workflow
        </h3>
        <p className="text-grey-2 font-Inter text-lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default Feature;
