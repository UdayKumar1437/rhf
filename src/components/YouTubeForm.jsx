import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object({
  username: yup.string().min(5,"Should be 5 charcters").max(7,"Max seven characters").required("Username is required"),
  email:yup.string().email("Email format is not valid").required("Email is required"),
  channel:yup.string().required("Channel is required")
})

const YouTubeForm = () => {
  
  const form = useForm({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      const data = await response.json();
      return {
        username: "",
        email: "",
        channel: "",
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumbers: [],
      };
    },
    resolver:yupResolver(schema)
  });

  const handleGetValues = ()=>
  {
    console.log(getValues().username)
  }
  const { register, handleSubmit, formState,watch,getValues,reset } = form;

  const { errors,touchedFields } = formState;

  console.log(errors);

  const watchuserName = watch()

  //   const {name,ref,onChange,onBlur} = register("username")

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-1/3 gap-2"
      >

        <h1>{JSON.stringify(watchuserName)}</h1>
        <label className="text-white" htmlFor="username">
          Username
        </label>
        <input
          className="border border-white py-2"
          type="text"
          id="username"
          {...register("username", {
            disabled :false,
          })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}

        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="border py-2 border-white"
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid Email format",
            },
            validate: {
              notanAdmin: (fieldValue) => {
                return (
                  fieldValue !== "uday@gmail.com" ||
                  "Enter a different email address"
                );
              },
              BlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("@gmail.com") ||
                  "This domain is not supported"
                );
              },
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label className="text-white" htmlFor="channel">
          Channel
        </label>
        <input
          className="border py-2 border-white"
          type="text"
          id="channel"
          {...register("channel")}
        />
        <label className="text-white" htmlFor="channel">
          Social Twitter
        </label>
        <input
          className="border py-2 border-white"
          type="text"
          id="channel"
          {...register("social.twitter"),{
              required : "Twitter profile is required",
              disabled:true,
          }}
        />
        {errors.channel && (
          <p className="text-red-500">{errors.channel.message}</p>
        )}

        <label className="text-white" htmlFor="primary-phone">
          Phone Number
        </label>
        <input
          className="border py-2 border-white"
          type="text"
          id="channel"
          {...register("phoneNumbers.0")}
        />
        <label className="text-white" htmlFor="primary-phone">
          Sec Phone Number
        </label>
        <input
          className="border py-2 border-white"
          type="text"
          id="channel"
          {...register("phoneNumbers.1")}
        />
        <button className="border  bg-black text-white border-black px-2 py-2 rounded-md">
          Submit
        </button>
<button onClick={()=>reset()} className="border  bg-black text-white border-black px-2 py-2 rounded-md">
          Reset
        </button>
        <button onClick={handleGetValues}>Get Values</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
