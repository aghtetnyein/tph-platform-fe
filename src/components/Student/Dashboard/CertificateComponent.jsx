import React from "react";

// icons
import { ShareIcon, DownloadIcon } from "@heroicons/react/solid";

// images
import CertificateImage from "../../../assets/images/Certificate.png";

const CertificateComponent = () => {
  return (
    <div className="border p-4 shadow-md rounded-lg">
      <img src={CertificateImage} alt="certificateImage" />
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center text-tph_purple hover:text-icon_bg cursor-pointer">
          <ShareIcon className="mr-3 w-5 h-5" aria-hidden="true" />
          <p className="text-md font-semibold">Share</p>
        </div>

        <div className="flex items-center text-tph_purple hover:text-icon_bg cursor-pointer">
          <DownloadIcon className=" mr-3 w-5 h-5" aria-hidden="true" />
          <p className="text-md font-semibold">Download</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateComponent;
