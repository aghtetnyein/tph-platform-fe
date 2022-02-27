import React, { useState, useEffect } from "react";
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
    bgColor: "#FFF3D2",
  },
  {
    id: "teacher",
    name: "Teacher",
    body: "Teacher teaches students the lessons",
    image:
      "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    bgColor: "#E1D4E0",
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
    id: "prefer-not-to-describe",
    name: "Prefer not to describe",
  },
];

// ------------------------------------------
const studentFormSchema = yup.object({
  dob: yup.string().required("Date of birth is required"),
});

const teacherFormSchema = yup.object({
  school: yup.string().required("School is required"),
});

const AccountType = ({ formValue, back, createAccount, resErrors }) => {
  const [currentAccountType, setCurrentAccountType] = useState("student");
  const [currentGender, setCurrentGender] = useState(gender[0]);

  const changeAccountType = (id) => {
    setCurrentAccountType(id);
  };

  const handleOnChangeGender = (value) => {
    setCurrentGender(value);
  };

  return (
    <div>
      <h2 className="mt-16 text-3xl font-extrabold text-gray-900">
        Choose account type.
      </h2>

      <div className="mt-8">
        <div className="mt-8 md:flex md:space-x-4">
          {accountTypes.map((item, index) => {
            return (
              <div
                key={index}
                className={`max-w-sm w-full rounded-md overflow-hidden border border-gray-300 hover:shadow-lg cursor-pointer mt-4 md:mt-0 text-gray-600 bg-gray-200`}
                onClick={() => {
                  changeAccountType(item.id);
                }}
                style={{
                  background:
                    item.id === currentAccountType ? item.bgColor : "none",
                }}
              >
                <div className="p-4">
                  <img
                    src={item.image}
                    alt=""
                    className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                  />
                  <div className="font-bold text-lg mt-4 mb-1">{item.name}</div>
                  <p className="text-grey-500 text-md">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
        {currentAccountType === "student" && (
          <StudentRegister
            formValue={formValue}
            currentAccountType={currentAccountType}
            currentGender={currentGender}
            createAccount={createAccount}
            back={back}
            handleOnChangeGender={handleOnChangeGender}
            resErrors={resErrors}
          />
        )}

        {currentAccountType === "teacher" && (
          <TeacherRegister
            formValue={formValue}
            currentAccountType={currentAccountType}
            currentGender={currentGender}
            createAccount={createAccount}
            back={back}
            handleOnChangeGender={handleOnChangeGender}
          />
        )}
      </div>
    </div>
  );
};

const StudentRegister = ({
  formValue,
  currentAccountType,
  currentGender,
  createAccount,
  back,
  handleOnChangeGender,
  resErrors,
}) => {
  // student create
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(studentFormSchema),
    defaultValues: {
      dob: formValue.dob,
    },
  });

  const handleStudentSubmit = (data) => {
    let gender = currentGender.id;
    let accountTypeValues = {
      accountType: currentAccountType,
      dob: data.dob,
      school: null,
      gender,
    };
    createAccount(accountTypeValues);
  };
  // student create

  useEffect(() => {
    if (resErrors.DOB) {
      [
        {
          type: "manual",
          name: "dob",
          message: resErrors.DOB[0],
        },
      ].forEach(({ name, type, message }) => setError(name, { type, message }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resErrors]);

  return (
    <form className="mt-14" onSubmit={handleSubmit(handleStudentSubmit)}>
      <div>
        <div className="md:flex md:space-x-4">
          <div className="w-full">
            <TextField
              register={register("dob")}
              type={"text"}
              name={"dob"}
              label={"Date of birth"}
              autoComplete={"date-of-birth"}
              placeholder={"eg: 7/11/2001"}
              errors={errors.dob?.message}
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

        <div className="mt-4 md:flex md:space-x-4">
          <div className="w-40">
            <Button
              type={"button"}
              variant={"secondary"}
              label={"Back"}
              handleClick={() => back("step-1")}
            />
          </div>
          <div className="w-40 mt-2 md:mt-0">
            <Button
              type={"submit"}
              variant={"primary"}
              label={"Create account"}
            />
          </div>
        </div>
        <div className="mt-8 text-sm">
          You already have an account?{" "}
          <RouterLink
            to="/login"
            className="font-medium text-tph_orange hover:text-tph_orange_hover hover:underline"
          >
            Login here.
          </RouterLink>
        </div>
      </div>
    </form>
  );
};

const TeacherRegister = ({
  currentAccountType,
  currentGender,
  createAccount,
  back,
  handleOnChangeGender,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(teacherFormSchema),
  });

  const handleTeacherSubmit = (data) => {
    let gender = currentGender.id;
    let accountTypeValues = {
      accountType: currentAccountType,
      dob: null,
      school: data.school,
      gender,
    };
    createAccount(accountTypeValues);
  };

  return (
    <form className="mt-14" onSubmit={handleSubmit(handleTeacherSubmit)}>
      <div>
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

        <div className="mt-4 md:flex md:space-x-4">
          <div className="w-40">
            <Button
              type={"button"}
              variant={"secondary"}
              label={"Back"}
              handleClick={() => back("step-1")}
            />
          </div>
          <div className="w-40 mt-2 md:mt-0">
            <Button
              type={"submit"}
              variant={"primary"}
              label={"Create account"}
            />
          </div>
        </div>
        <div className="mt-8 text-sm">
          You already have an account?{" "}
          <RouterLink
            to="/login"
            className="font-medium text-tph_orange hover:text-tph_orange_hover hover:underline"
          >
            Login here.
          </RouterLink>
        </div>
      </div>
    </form>
  );
};

export default AccountType;
