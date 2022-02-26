import React, { useState } from "react";
import moment from "moment";

// components
import {
  TitleWithIcon,
  TabsWithUnderline,
  CardVertical,
} from "../../../components/elements";

// constants
const popularProjects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Phue Phue",
    body: "Age: 11",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    projectTitle: "Birthday Party",
    date: moment().format("DD MMMM YYYY"),
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    title: "Ma Ma",
    body: "Age: 14",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    projectTitle: "Star wars",
    date: moment().format("DD MMMM YYYY"),
  },
];

const Projects = () => {
  const tabsOptions = [
    "Published",
    "Unpublished",
    "Drafts",
    "Saved",
    "Class projects",
  ];
  const [currentTab, setCurrentTab] = useState("Published");
  const changeTab = (item) => {
    setCurrentTab(item);
  };

  return (
    <div className="w-full h-full px-6 py-8 xl:px-16">
      <TitleWithIcon
        icon={"codeIcon"}
        title={"Your Projects"}
        subtitle={"All the creations by you are below"}
      />

      <div className="mt-4">
        <TabsWithUnderline
          tabsOptions={tabsOptions}
          currentTab={currentTab}
          changeTab={changeTab}
        />
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularProjects.map((item, index) => (
          <div key={index}>
            <CardVertical
              image={item.image}
              title={item.title}
              body={item.body}
              avatar={item.avatar}
              projectTitle={item.projectTitle}
              date={item.date}
              myProjects={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
