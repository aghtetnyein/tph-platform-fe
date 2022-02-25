import React from "react";

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import { TitleWithIcon } from "../../../components/elements";
import { TextField, Button } from "../../forms";

const Classes = () => {
  const schema = yup.object().shape({
    classCode: yup
      .string()
      .min(6, "Section code should be exactly 6 characters")
      .max(6, "Section code should be exactly 6 characters")
      .required("Section code is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full px-6 py-8 xl:px-16">
      <TitleWithIcon
        icon={"classIcon"}
        title={"Search New Classes"}
        subtitle={"Attend your teacher's class with the section code"}
      />

      <div className="mt-8 border border-gray-300 p-4 rounded-lg">
        <h5 className="text-md lg:text-lg font-bold">Enter a section</h5>
        <p className="mt-1.5 font-semibold text-gray-500">
          Join your teacher's classroom by entering a section code
        </p>

        <form
          className="mt-6 flex space-x-4 items-center w-full md:w-1/2 xl:w-1/4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            register={register("classCode")}
            type={"text"}
            name={"classCode"}
            autoComplete={"classCode"}
            placeholder={"eg: AURIEB"}
            errors={errors.classCode?.message}
            // value={"sasa@xsphere.co"}
          />
          <div className="w-1/2">
            <Button variant={"primary"} type={"submit"} label={"Join"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Classes;
