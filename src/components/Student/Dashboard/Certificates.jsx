import React from "react";

// components
import { TitleWithIcon } from "../../elements";
import { CertificateComponent } from ".";

const Certificates = () => {
  return (
    <div className="w-full h-full px-6 py-8 xl:px-16">
      <TitleWithIcon
        icon={"certificateIcon"}
        title={"Certificates Achieved"}
        subtitle={"Your certificates show case is here"}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((item, index) => (
          <div key={index}>
            <CertificateComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
