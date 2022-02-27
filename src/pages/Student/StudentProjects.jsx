import React, { useState } from "react";
import moment from "moment";

// components
import Page from "../../components/utils/Page";
import { Button } from "../../components/forms";
import {
  DashboardTitle,
  CardVertical,
  TabsWithUnderline,
  Footer,
  ProjectsCardHorizontal,
} from "../../components/elements";

// icons
import {
  VolumeUpIcon,
  PlayIcon,
  CogIcon,
  PuzzleIcon,
  LightBulbIcon,
} from "@heroicons/react/solid";

// constants
const DancePartyBg =
  "https://images.unsplash.com/photo-1611879531844-24b7ddf40b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const demiText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aspernatur voluptates porro, quos ...";

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

const projectCreations = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Dance Party",
    body: "Making dance moves with characters",
    buttonLabel: "Read more",
    projectsCount: 250,
    postfixIcon: moreIcon,
    footerBg: "#b1dfdc",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Frozen",
    body: "Making dance moves with characters",
    buttonLabel: "Read more",
    projectsCount: 120,
    postfixIcon: moreIcon,
    footerBg: "#dcbad8",
  },
];

const oneHourProjects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Science Dance",
    body: demiText,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1568120253392-9d9860aca03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Stars wars",
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

const lessonsNotableIcons = [
  <VolumeUpIcon className="text-tph_cyan w-5 h-5 lg:w-7 lg:h-7" />,
  <PlayIcon className="text-tph_purple w-5 h-5 lg:w-7 lg:h-7" />,
  <CogIcon className="text-red w-5 h-5 lg:w-7 lg:h-7" />,
  <PuzzleIcon className="text-tph_orange w-5 h-5 lg:w-7 lg:h-7" />,
  <LightBulbIcon className="text-tph_gold_hover w-5 h-5 lg:w-7 lg:h-7" />,
];

const StudentProjects = () => {
  const tabsOptions = ["Trending", "Published"];
  const [currentTab, setCurrentTab] = useState("Trending");
  const changeTab = (item) => {
    setCurrentTab(item);
  };

  return (
    <Page title="Projects | TPH Dance Party">
      <div className="h-full">
        <div
          className="w-full bg-tertiary_white h-96"
          style={{
            backgroundImage: `url(${DancePartyBg})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="relative w-full h-full flex px-6 py-16 md:px-12 lg:px-20 lg:py-24 lg:pb-40 xl:px-56"
            style={{ background: "rgba(0,0,0, 0.3)" }}
          >
            <div className="w-full h-full hidden lg:block">
              {/* <img
                className="w-96 h-96 mt-8 ml-12 rounded-full"
                src={LessonsOwl}
              /> */}
            </div>
            <div className="w-full">
              <h2 className="text-xl lg:text-3xl font-extrabold text-white">
                Our students' creations
              </h2>
              <p className="mt-4 font-medium text-white text-lg md:w-2/3 xl:w-full border-l-4 border-tph_gold pl-2">
                Over 1200 projects created.
              </p>
              <div className="absolute top-52 w-4/5 lg:top-64 md:w-2/3 lg:w-2/5 bg-gray-100 rounded-lg shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-gray-100 pb-4 px-5">
                <div className="flex justify-between -mt-6 md:-mt-7 md:mx-6 xl:mx-8">
                  {lessonsNotableIcons.map((icon, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 flex items-center justify-center rounded-full`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <p className="mt-10 font-medium text-tph_purple text-md text-center">
                  Build awesome projects using our tools which are more
                  extensive than those provided free-plays. Have fun and
                  showcase your creativity.
                </p>

                <div className="mt-10 mb-2 flex justify-center">
                  <Button
                    type={"button"}
                    variant={"primary"}
                    label={"Explore more"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40">
          <DashboardTitle
            title={"Projects"}
            subtitle={"Start create your own projects"}
          />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectCreations.map((item, index) => (
              <div key={index}>
                <ProjectsCardHorizontal item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40 bg-gray-100">
          <DashboardTitle
            title={"Popular 1-hour courses"}
            subtitle={"Watch 1-hour tutorials if you don't have enough time"}
          />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {oneHourProjects.map((item, index) => (
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
    </Page>
  );
};

export default StudentProjects;
