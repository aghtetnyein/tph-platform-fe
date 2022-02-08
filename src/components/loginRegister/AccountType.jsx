import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// components
import { Button, TextField, Select } from "../forms";

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ------------------------------------------
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

// ------------------------------------------

const schema = yup.object({
  school: yup.string().required("School is required"),
});

const AccountType = ({ back, createAccount }) => {
  const [currentAccountType, setCurrentAccountType] = useState("student");
  const [currentGender, setCurrentGender] = useState(gender[0]);

  const changeAccountType = (id) => {
    setCurrentAccountType(id);
  };

  const handleOnChangeGender = (value) => {
    setCurrentGender(value);
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
    let gender = currentGender.id;
    let accountTypeValues = {
      accountType: currentAccountType,
      school: data.school,
      gender,
    };
    createAccount(accountTypeValues);
  };

  return (
    <div>
      <h2 className="mt-16 text-3xl font-extrabold text-gray-900">
        Choose account type.
      </h2>

      <div className="mt-16">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="md:flex md:space-x-4">
            <div className="w-full">
              <TextField
                register={register("school")}
                type={"text"}
                name={"school"}
                label={"School"}
                autoComplete={"school"}
                placeholder={"eg: B.E.H.S Thuwunna"}
                errors={errors.school?.message}
                // value={"sasa@xsphere.co"}
              />
            </div>

            <div className="w-full mt-6 md:mt-0">
              <Select
                required={true}
                name={"gender"}
                label={"Gender"}
                items={gender}
                currentItem={currentGender}
                handleChange={handleOnChangeGender}
              />
            </div>
          </div>

          <div className="md:flex md:space-x-4">
            <div className="w-full">
              <Button
                type={"button"}
                variant={"secondary"}
                label={"Back"}
                handleClick={() => back("step-1")}
              />
            </div>
            <div className="w-full mt-2 md:mt-0">
              <Button
                type={"submit"}
                variant={"primary"}
                label={"Create account"}
              />
            </div>
          </div>
          <div className="text-sm">
            You already have an account?{" "}
            <RouterLink
              to="/login"
              className="font-medium text-tph_orange hover:text-tph_orange_hover hover:underline"
            >
              Login here.
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountType;
