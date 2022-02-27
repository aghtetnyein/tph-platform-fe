import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sentenceCase } from "change-case";
import { actionCreators } from "../../redux";
import { bindActionCreators } from "redux";

// utils
import Page from "../../components/utils/Page";
import { TextField, Select, Button } from "../../components/forms";

// components
import AccountSettingsSidebar from "../../components/utils/AccountSettingsSidebar";

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// APIs
import StudentAPIs from "../../api/StudentAPIs";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  dob: yup.string().required("Date of birth is required"),
});

const Profile = () => {
  // instances
  const dispatch = useDispatch();

  // redux-states
  const token = useSelector((state) => state.auth.token);
  const authorizedUser = useSelector((state) => state.data.user);

  // binding action creator
  const { snackBarOpener } = bindActionCreators(actionCreators, dispatch);

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
      id: "prefer-not-to-describe",
      name: "Prefer not to describe",
    },
  ];
  const authorizedUserGender = {
    id: authorizedUser.gender,
    name: sentenceCase(authorizedUser.gender),
  };

  // states
  const [edit, setEdit] = useState(false);
  const [currentGender, setCurrentGender] = useState(authorizedUserGender);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: authorizedUser.username,
      dob: authorizedUser.DOB,
      gender: authorizedUser.gender,
    },
  });

  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      email: authorizedUser.email,
      dob: data.dob,
      gender: currentGender.id,
    };

    const res = await StudentAPIs.editProfile(
      authorizedUser.slug,
      formData,
      token
    );
    if (res.status === 202) {
      snackBarOpener({
        status: "success",
        title: "Success",
        message: res.data.success,
      });
    } else {
      snackBarOpener({
        status: "error",
        title: "Error",
        message: "Something went wrong.",
      });
    }
    setEdit(false);
  };

  // functions
  const handleOnChangeGender = (value) => {
    setCurrentGender(value);
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
              <h2 className="text-md font-semibold">
                {authorizedUser.username}
              </h2>
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
                  <TextField
                    register={register("dob")}
                    type={"text"}
                    name={"dob"}
                    label={"Date of birth"}
                    autoComplete={"dob"}
                    placeholder={"eg: 2020-07-12"}
                    errors={errors.dob?.message}
                    // value={"sasa@xsphere.co"}
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
                    value={authorizedUser.email}
                    disabled
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
