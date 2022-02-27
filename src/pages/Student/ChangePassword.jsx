import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  oldPassword: yup
    .string()
    .required("Old Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(32, "Password is too long - should be 32 chars maximum."),
  password: yup
    .string()
    .required("New Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(32, "Password is too long - should be 32 chars maximum."),
  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Profile = () => {
  // instances
  const dispatch = useDispatch();

  // states
  const [edit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch({
      type: "MODAL_CONFIRM_CLOSE",
    });
  };

  const onSave = (data) => {
    setEdit(false);

    dispatch({
      type: "MODAL_CONFIRM_OPEN",
      payloads: {
        title: "Are you sure you want to change your password?",
        onSubmitConfirmDialog: { onSubmit: () => onSubmit(data) },
      },
    });
  };

  return (
    <Page title="Change Password | Account Settings">
      <div className="lg:flex px-6 py-8 md:px-12 lg:px-20 lg:py-12 xl:px-48 lg:space-x-8 h-full w-full">
        <div className="hidden lg:block w-1/3">
          <AccountSettingsSidebar urlLastSegment="change-password" />
        </div>
        <div className="w-full lg:w-2/3 py-8 px-6 lg:px-12 bg-white rounded-lg border shadow-md">
          <h2 className="text-md font-semibold">Change password</h2>
          <p className="mt-2 text-md font-base text-gray-500">
            Make new password which is not the same as your old password. Your
            next login will need the password.
          </p>

          <div className="mt-12 space-y-6">
            <form onSubmit={handleSubmit(onSave)}>
              <div>
                <TextField
                  required
                  register={register("oldPassword")}
                  type={"password"}
                  name={"oldPassword"}
                  label={"Old password"}
                  autoComplete={"oldPassword"}
                  placeholder={"At lest 8 characters"}
                  errors={errors.oldPassword?.message}
                  disabled={!edit}
                  // value={"password"}
                />
              </div>
              <div className="md:flex md:space-x-6">
                <div className="mt-6 w-full">
                  <TextField
                    required
                    register={register("password")}
                    type={"password"}
                    name={"password"}
                    label={"New Password"}
                    autoComplete={"password"}
                    placeholder={"At lest 8 characters"}
                    errors={errors.password?.message}
                    disabled={!edit}
                    // value={"password"}
                  />
                </div>
                <div className="mt-6 w-full">
                  <TextField
                    required
                    register={register("passwordConfirm")}
                    type={"password"}
                    name={"passwordConfirm"}
                    label={"Confirm Password"}
                    autoComplete={"passwordConfirm"}
                    placeholder={"At lest 8 characters"}
                    errors={errors.passwordConfirm?.message}
                    disabled={!edit}
                    // value={"password"}
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
                      label={"Edit password"}
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
