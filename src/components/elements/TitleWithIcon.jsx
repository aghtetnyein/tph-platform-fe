import React from "react";

// icons
import {
  CodeIcon,
  CalendarIcon,
  InboxIcon,
  AcademicCapIcon,
} from "@heroicons/react/solid";

const TitleWithIcon = ({ icon, title, subtitle }) => {
  return (
    <div>
      <div>
        {icon === "codeIcon" && (
          <CodeIcon
            className="text-tph_gold_hover mr-3 w-8 h-8"
            aria-hidden="true"
          />
        )}

        {icon === "courseIcon" && (
          <CalendarIcon
            className="text-tph_gold_hover mr-3 w-8 h-8"
            aria-hidden="true"
          />
        )}

        {icon === "classIcon" && (
          <InboxIcon
            className="text-tph_gold_hover mr-3 w-8 h-8"
            aria-hidden="true"
          />
        )}

        {icon === "certificateIcon" && (
          <AcademicCapIcon
            className="text-tph_gold_hover mr-3 w-8 h-8"
            aria-hidden="true"
          />
        )}
        <div className="mt-3">
          <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
          <p className="mt-1.5 font-semibold text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleWithIcon;
