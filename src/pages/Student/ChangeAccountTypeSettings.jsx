import React, { useState } from "react";

// utils
import Page from "../../components/utils/Page";
import { TextField, Button } from "../../components/forms";

// components
import AccountSettingsSidebar from "../../components/utils/AccountSettingsSidebar";

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  school: yup.string().required("School is required"),
});

// constants
const accountTypes = [
  {
    id: "student",
    name: "Student",
    body: "Student can attend and learn effectively dance party.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: "teacher",
    name: "Teacher",
    body: "Teacher teaches students the lessons",
    image:
      "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const ChangeAccountTypeSettings = () => {
  // states
  const [edit, setEdit] = useState(false);
  const [currentAccountType, setCurrentAccountType] = useState("student");

  // functions
  const changeAccountType = (id) => {
    setCurrentAccountType(id);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = { accountType: currentAccountType, school: data.school };
    console.log(formData);
    setEdit(false);
  };

  return (
    <Page title="Edit profile | Account Settings">
      <div className="lg:flex px-6 py-8 md:px-12 lg:px-20 lg:py-12 xl:px-48 lg:space-x-8 h-full w-full">
        <div className="hidden lg:block w-1/3">
          <AccountSettingsSidebar urlLastSegment="change-account-type" />
        </div>
        <div className="w-full lg:w-2/3 py-8 px-6 lg:px-12 bg-white rounded-lg border shadow-md">
          <h2 className="text-md font-semibold">Change account type</h2>
          <p className="mt-2 text-md font-base text-gray-500">
            Change your account type to student or teacher
          </p>

          <div className="mt-12 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex md:space-x-4">
                {accountTypes.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`max-w-sm w-full rounded-md overflow-hidden border border-gray-300 hover:shadow-lg cursor-pointer mt-4 md:mt-0 ${
                        item.id === currentAccountType
                          ? "bg-tph_orange text-white"
                          : null
                      }`}
                      onClick={() => {
                        changeAccountType(item.id);
                      }}
                    >
                      <div className="p-4">
                        <img
                          src={item.image}
                          alt=""
                          className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                        />
                        <div className="font-bold text-lg mt-4 mb-1">
                          {item.name}
                        </div>
                        <p className="text-grey-500 text-md">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 md:flex md:space-x-4">
                <div className="w-full">
                  <TextField
                    register={register("school")}
                    type={"text"}
                    name={"school"}
                    label={"School"}
                    autoComplete={"school"}
                    placeholder={"eg: B.E.H.S Thuwunna"}
                    errors={errors.school?.message}
                    disabled={!edit}
                    // value={"sasa@xsphere.co"}
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                {edit ? (
                  <div className="flex justify-end w-full space-x-3">
                    <div className="w-1/4">
                      <Button
                        type={"button"}
                        variant={"secondary"}
                        label={"Cancel"}
                        handleClick={() => setEdit(false)}
                      />
                    </div>
                    <div className="w-1/4">
                      <Button
                        type={"submit"}
                        variant={"primary"}
                        label={"Save"}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-1/4">
                    <Button
                      type={"button"}
                      variant={"secondary"}
                      label={"Edit"}
                      handleClick={() => setEdit(true)}
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ChangeAccountTypeSettings;
