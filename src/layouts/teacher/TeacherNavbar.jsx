import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
// ui
import { Disclosure, Menu, Transition, Listbox } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";

import TPHLogo from "../../assets/logos/TPHLogo.svg";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Lessons", href: "/lessons", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Courses", href: "/courses", current: false },
];

const language = [
  {
    id: 1,
    name: "Burma",
    value: "mm",
    image: "https://img.icons8.com/color/48/000000/myanmar.png",
  },
  {
    id: 2,
    name: "English",
    value: "en",
    image: "https://img.icons8.com/color/48/000000/usa.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TeacherNavbar() {
  // instances
  const dispatch = useDispatch();
  const languageFromRedux = useSelector((state) => state.language);

  const [selected, setSelected] = useState(languageFromRedux);

  const languageChange = (language) => {
    setSelected(language);
    dispatch({
      type: "SET_LANGUAGE",
      payloads: {
        language: language,
      },
    });
  };

  return (
    <Disclosure as="nav" className="bg-tph_purple">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-auto" src={TPHLogo} alt="Workflow" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <RouterLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-400 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </RouterLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Listbox
                  value={selected}
                  onChange={(event) => {
                    languageChange(event);
                  }}
                >
                  {({ open }) => (
                    <div className="relative hidden sm:block">
                      <Listbox.Button className="relative w-full bg-icon_bg rounded-full shadow-sm p-2 pr-10 text-left sm:text-sm">
                        <span className="flex items-center">
                          <img
                            src={selected.image}
                            alt=""
                            className="h-7 w-7 ml-1"
                          />
                          <span className="ml-3 block truncate text-white font-semibold">
                            {selected.name}
                          </span>
                        </span>
                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-2 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {language.map((item) => (
                            <Listbox.Option
                              key={item.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-tph_purple"
                                    : "text-gray-900",
                                  "cursor-pointer select-none relative py-2 pl-3 pr-9"
                                )
                              }
                              value={item}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="flex-shrink-0 h-6 w-6 rounded-full"
                                    />
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {item.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-tph_purple",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  )}
                </Listbox>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-icon_bg flex p-2 items-center text-sm rounded-full">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-7 w-7 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile-img"
                      />
                      <p className="hidden lg:block text-white font-semibold ml-2 mr-1">
                        U Myo Myint Thaung
                      </p>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <RouterLink
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 flex items-center"
                            )}
                          >
                            <UserIcon className="h-5 w-5" aria-hidden="true" />
                            <p className="font-medium ml-2 mr-1">Profile</p>
                          </RouterLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <RouterLink
                            to="/account-settings"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 flex items-center"
                            )}
                          >
                            <CogIcon className="h-5 w-5" aria-hidden="true" />
                            <p className="font-medium ml-2 mr-1">
                              Account Settings
                            </p>
                          </RouterLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <RouterLink
                            to="/logout"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 flex items-center"
                            )}
                          >
                            <LogoutIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            <p className="font-medium ml-2 mr-1">Logout</p>
                          </RouterLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={RouterLink}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-icon_bg text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
