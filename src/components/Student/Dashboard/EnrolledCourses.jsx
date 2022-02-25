import React, { useState } from "react";

// components
import {
  TitleWithIcon,
  TabsWithUnderline,
  LessonCardHorizontal,
} from "../../../components/elements";

// constants
const EnrolledCoursesConstants = [
  {
    image:
      "https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Course A",
    recommendedAge: "3-5",
    currentProgress: 2,
    total: 17,
    progressColor: "#7ecdc7",
    enrolledCount: "500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Course D",
    recommendedAge: "12-18",
    currentProgress: 10,
    total: 21,
    progressColor: "#57475B",
    enrolledCount: "300",
  },
];

const ComputerSpecializationCourses = [
  {
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Computer Basic",
    recommendedAge: "3-5",
    unitsCount: "5",
    lessonsCount: "10",
    enrolledCount: "500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Computer Literacy",
    recommendedAge: "12-18",
    unitsCount: "5",
    lessonsCount: "10",
    enrolledCount: "300",
  },
];

const EnrolledCourses = () => {
  const tabsOptions = ["Completed", "In progress"];
  const [currentTab, setCurrentTab] = useState("Completed");
  const changeTab = (item) => {
    setCurrentTab(item);
  };

  return (
    <div className="w-full h-full px-6 py-8 xl:px-16">
      <TitleWithIcon
        icon={"courseIcon"}
        title={"Enrolled Courses"}
        subtitle={"The courses below are the ones you have enrolled"}
      />

      <div className="mt-4">
        <TabsWithUnderline
          tabsOptions={tabsOptions}
          currentTab={currentTab}
          changeTab={changeTab}
        />
      </div>

      <div className="mt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {EnrolledCoursesConstants.map((course, index) => (
          <div key={index}>
            <LessonCardHorizontal item={course} />
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {ComputerSpecializationCourses.map((course, index) => (
          <div key={index}>
            <LessonCardHorizontal item={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
