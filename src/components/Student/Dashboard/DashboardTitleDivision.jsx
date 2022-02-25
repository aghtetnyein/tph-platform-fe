import React from "react";

// images
import BookMale from "../../../assets/images/BookMale.png";
import DashboardBackground from "../../../assets/images/DashboardBackground.png";
import Brain from "../../../assets/images/Brain.png";
import Computer from "../../../assets/images/Computer.png";

const DashboardTitleDivision = () => {
  return (
    <div
      className="w-full h-full bg-icon_bg"
      style={{
        backgroundImage: `url(${DashboardBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full px-6 xl:px-24 py-8 grid grid-cols-12 lg:gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="md:flex md:space-x-8 items-center">
            <img className="w-20 h-auto" src={BookMale} alt="book-male" />
            <div className="mt-4 md:mt-0">
              <h1 className="text-md md:text-lg text-white font-bold">
                Explore your current projects & enrolled courses in one place!
              </h1>
              <p className="my-4 text-white font-normal text-md">
                Complete your unfinished courses to be certified
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 col-span-12 lg:col-span-5 bg-tph_purple rounded-lg">
          <div className="px-3 py-4 flex items-center">
            <div>
              <img
                className="inline-block h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile-img"
              />
            </div>
            <div className="ml-3">
              <p className="text-md font-medium text-white">Tom Cook</p>
              <div className="flex space-x-2">
                <p className="text-sm font-medium text-tph_cyan group-hover:text-gray-200">
                  Age: 11
                </p>
                <p className="text-sm font-medium text-tph_gold group-hover:text-gray-200">
                  Student
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 py-4 md:flex items-center md:space-x-2 space-y-2 md:space-y-2 md:space-x-6 border-t border-gray-400">
            <div className="flex space-x-2 items-center">
              <div className="w-12 h-12 bg-icon_bg rounded-full flex items-center justify-center">
                <img className="w-6 h-6" src={Brain} alt="brain" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">10+</p>
                <p className="text-sm font-medium text-white">
                  Projects created
                </p>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="w-12 h-12 bg-icon_bg rounded-full flex items-center justify-center">
                <img className="w-6 h-6" src={Computer} alt="brain" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">10+</p>
                <p className="text-sm font-medium text-white">
                  Projects created
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTitleDivision;
