import React, { useState } from "react";

// utils
import Page from "../../components/utils/Page";
import { TextField, Select, Button } from "../../components/forms";

// components
import AccountSettingsSidebar from "../../components/utils/AccountSettingsSidebar";

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
});

// constants
const gender = [
  {
    id: "male",
    name: "Male",
  },
  {
    id: "female",
    name: "Female",
  },
  {
    id: "others",
    name: "Prefer not to describe",
  },
];

const age = [
  {
    id: 11,
    name: "11",
  },
  {
    id: 12,
    name: "12",
  },
  {
    id: 13,
    name: "13",
  },
];

const Profile = () => {
  // states
  const [edit, setEdit] = useState(false);
  const [currentGender, setCurrentGender] = useState(gender[0]);
  const [currentAge, setCurrentAge] = useState(age[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      gender: currentGender.id,
      age: currentAge.id,
    };

    console.log(formData);
    setEdit(false);
  };

  // functions
  const handleOnChangeGender = (value) => {
    setCurrentGender(value);
  };

  const handleOnChangeAge = (value) => {
    setCurrentAge(value);
  };

  return (
    <Page title="Edit profile | Account Settings">
      <div className="lg:flex px-6 py-8 md:px-12 lg:px-20 lg:py-12 xl:px-48 lg:space-x-8 h-full w-full">
        <div className="hidden lg:block w-1/3">
          <AccountSettingsSidebar urlLastSegment="profile" />
        </div>
        <div className="w-full lg:w-2/3 py-8 px-6 lg:px-12 bg-white rounded-lg border shadow-md">
          <h2 className="text-md font-semibold">Profile information</h2>
          <div className="mt-12 flex space-x-6 items-center">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt="profile"
            />
            <div>
              <h2 className="text-md font-semibold">Phue Phue</h2>
              <div className="mt-1 flex flex-col md:flex-row items-center md:space-x-4">
                <div>
                  <Button
                    type="button"
                    variant="text"
                    label="Upload image"
                    textColor="text-tph_orange"
                    handleClick={() => console.log("upload clicked")}
                  />
                </div>
                <div>
                  <Button
                    type="button"
                    variant="text"
                    label="Remove image"
                    textColor="text-red"
                    handleClick={() => console.log("remove clicked")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex md:space-x-6">
                <div className="mt-6 w-full space-x-4">
                  <TextField
                    register={register("name")}
                    type={"text"}
                    name={"name"}
                    label={"Name"}
                    autoComplete={"name"}
                    placeholder={"eg: Maung Maung"}
                    errors={errors.name?.message}
                    // value={"sasa@xsphere.co"}
                    disabled={!edit}
                  />
                </div>

                <div className="mt-6 w-full">
                  <Select
                    name={"age"}
                    label={"Age"}
                    items={age}
                    currentItem={currentAge}
                    handleChange={handleOnChangeAge}
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-6">
                <div className="mt-6 w-full">
                  <Select
                    name={"gender"}
                    label={"Gender"}
                    items={gender}
                    currentItem={currentGender}
                    handleChange={handleOnChangeGender}
                    disabled={!edit}
                  />
                </div>

                <div className="mt-6 w-full">
                  <TextField
                    register={register("email")}
                    type={"email"}
                    name={"email"}
                    label={"Email address"}
                    autoComplete={"email"}
                    placeholder={"eg: maungmaung@gmail.com"}
                    errors={errors.email?.message}
                    // value={"sasa@xsphere.co"}
                    disabled={!edit}
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

export default Profile;
