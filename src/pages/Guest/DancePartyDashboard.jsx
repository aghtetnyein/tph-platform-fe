import React, { useState } from "react";
import moment from "moment";

// components
import { Button } from "../../components/forms";
import {
  DashboardTitle,
  CardHorizontal,
  CardVertical,
  TabsWithUnderline,
  Footer,
} from "../../components/elements";

const DancePartyBg =
  "https://images.unsplash.com/photo-1611879531844-24b7ddf40b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const moreIcon = (
  <span>
    <svg
      className="ml-2 -mr-1 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
);

const DancePartyDetails = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "What is Dance Party?",
    subtitle: "Click below to read more about the lessons in the dance party",
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1512951670161-b5c6c632b00e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Learn how to dance.",
    subtitle: "Learn how to make dance characters with code step by step",
    buttonLabel: "Learn",
    postfixIcon: moreIcon,
  },
];

const demiText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aspernatur voluptates porro, quos ...";

const DancersDetails = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Kyouk Sel Elephant",
    body: demiText,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1568120253392-9d9860aca03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "U Shwe Yoe & Daw Moe",
    body: demiText,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Thu Ngel Thaw",
    body: demiText,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1562048048-86d659689440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "New character",
    body: demiText,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
];

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

const DancePartyDashboard = () => {
  const tabsOptions = ["Trending", "Published"];
  const [currentTab, setCurrentTab] = useState("Trending");
  const changeTab = (item) => {
    setCurrentTab(item);
  };

  return (
    <div className="h-full">
      <div
        className="w-full bg-tertiary_white"
        style={{
          backgroundImage: `url(${DancePartyBg})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full px-6 py-16 md:px-12 lg:px-20 lg:py-24 xl:px-40"
          style={{ background: "rgba(0,0,0, 0.3)" }}
        >
          <h2 className="text-xl lg:text-3xl font-extrabold text-white">
            Welcome to Dance Party
          </h2>
          <p className="mt-4 font-medium text-gray-300 text-lg md:w-2/3 xl:w-1/2">
            In this lesson, you can learn how to programmactically make MYANMAR
            dance to characters. You can favouritely programm the chracters and
            the dances.
          </p>

          <div className="mt-12 w-36">
            <Button
              type={"button"}
              variant={"secondary"}
              label={"Let's Rock!"}
            />
          </div>
        </div>
      </div>

      <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40">
        <DashboardTitle
          title={"Let's dance together!"}
          subtitle={"Create dances with code"}
        />
        <div className="mt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          {DancePartyDetails.map((item, index) => (
            <div key={index}>
              <CardHorizontal
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                buttonLabel={item.buttonLabel}
                postfixIcon={item.postfixIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40">
        <DashboardTitle
          title={"Who are the dancers?"}
          subtitle={"Myanmar festivals and traditional characters"}
        />
        <p className="mt-8 font-semibold text-gray-800">
          Read the history of the dance characters and learn code favorably.
          Click "Read more" button to know more about the dancers.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DancersDetails.map((item, index) => (
            <div key={index}>
              <CardVertical
                image={item.image}
                title={item.title}
                body={item.body}
                buttonLabel={item.buttonLabel}
                postfixIcon={item.postfixIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40">
        <DashboardTitle
          title={"Creators best works"}
          subtitle={"Projects of students"}
        />
        <p className="mt-8 font-semibold text-gray-800">
          Most popular projects in the Dance Party. Create your work the best
          you can.
        </p>
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
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DancePartyDashboard;
