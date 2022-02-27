import React from "react";

// utils
import Page from "../../components/utils/Page";

// components
import {
  DashboardTitle,
  Footer,
  ProjectsCardHorizontal,
  CardWithPngAtSide,
  CardVertical,
  CoursesCard,
} from "../../components/elements";
import { Button } from "../../components/forms";

// images
import DancePartyDashboardBlocksImage from "../../assets/images/DancePartyDashboardBlocksImage.png";
import OwlUsingLaptop from "../../assets/images/OwlUsingLaptop.png";
import Brain from "../../assets/images/Brain.png";
import Computer from "../../assets/images/Computer.png";
import Code from "../../assets/images/Code.png";
import Learn from "../../assets/images/Learn.png";

// constants
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

const demiText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aspernatur voluptates porro, quos ...";

const creationsAndLessons = [
  {
    id: 1,
    background: "linear-gradient(140deg, #57475B, #927699)",
    title: "Creative projects",
    image: Brain,
    illustration: Code,
    body: "Build awesome projects using our tools. Have fun and showcase your creativity",
    buttonLabel: "Create",
    projects: 20,
  },
  {
    id: 2,
    background: "linear-gradient(140deg, #57475B, #927699)",
    title: "Remarkable Lessons",
    image: Computer,
    illustration: Learn,
    body: "Learn computer science principles and topics with courses and lessons developed by TPH",
    buttonLabel: "Learn",
    courses: 10,
  },
];

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

const OneHourCourses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Science Dance",
    body: demiText,
    units: 10,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1568120253392-9d9860aca03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Stars wars",
    body: demiText,
    units: 21,
    buttonLabel: "Read more",
    postfixIcon: moreIcon,
  },
];

const EnrolledCourses = [
  {
    title: "Computer Fundamentals",
    subtitle: "Computer Science Discoveries",
    sessionCode: "GDRPTZ",
    totalUnits: "10",
    finishedUnits: "3",
    progressColor: "#7ecdc7",
  },
  {
    title: "Digital Literacy",
    subtitle: "History of coins",
    sessionCode: "DIEPAQ",
    totalUnits: "5",
    finishedUnits: "2",
    progressColor: "#fbb615",
  },
];

const StudentHomePage = () => {
  return (
    <Page title="Student | TPH Dance Party">
      <div className="h-full">
        <div
          className="w-full bg-tertiary_white h-full"
          style={{
            backgroundImage: `url(${DancePartyBg})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="w-full h-full px-6 py-16 md:px-12 lg:px-20 lg:py-18 lg:pb-20 xl:px-56"
            style={{ background: "rgba(0,0,0, 0.3)" }}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <h5 className="text-lg lg:text-xl font-bold text-white">
                For the students
              </h5>
              <h2 className="text-xl lg:text-3xl font-extrabold text-white my-4">
                Computer Science & Engineering
              </h2>
              <h5 className="w-1/2 text-center text-sm lg:text-lg font-normal text-gray-100 my-6">
                Youth-led Non-profit Social Enterprise Making Computer Science
                Education Accessible for Everyone
              </h5>
              <div className="mb-8 flex justify-center">
                <Button
                  type={"button"}
                  variant={"primary"}
                  label={"Let's innovate"}
                  backgroundColor={"#dcbad8"}
                  labelColor={"#000"}
                  postfixIcon={moreIcon}
                />
              </div>
              <div className="bg-gray-100 rounded-xl shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 py-4 px-14 flex items-center justify-center space-x-12">
                <img
                  className="w-24 h-auto"
                  src={OwlUsingLaptop}
                  alt="owl-using-laptop"
                />
                <img
                  className="w-36 h-auto"
                  src={DancePartyDashboardBlocksImage}
                  alt="block-images"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40">
          <div className="grid md:grid-cols-2 gap-4">
            {creationsAndLessons.map((creation, index) => (
              <div key={index}>
                <CardWithPngAtSide item={creation} />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40 bg-gray-100">
          <DashboardTitle
            title={"Projects"}
            subtitle={"Start create your own projects"}
          />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {projectCreations.map((item, index) => (
              <div key={index}>
                <ProjectsCardHorizontal item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40">
          <DashboardTitle
            title={"Popular 1-hour courses"}
            subtitle={"Watch 1-hour tutorials if you don't have enough time"}
          />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OneHourCourses.map((item, index) => (
              <div key={index}>
                <CardVertical
                  image={item.image}
                  title={item.title}
                  units={item.units}
                  body={item.body}
                  buttonLabel={item.buttonLabel}
                  postfixIcon={item.postfixIcon}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-8 md:px-12 lg:px-20 lg:py-16 xl:px-40 bg-gray-100">
          <DashboardTitle
            title={"Enrolled courses"}
            subtitle={
              "Attend a class with the section code below. Teachers will be happy to help you."
            }
          />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {EnrolledCourses.map((course, index) => (
              <div key={index}>
                <CoursesCard item={course} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Page>
  );
};

export default StudentHomePage;
