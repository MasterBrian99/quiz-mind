import React, { useState, useEffect } from "react";
import {
  userNameValidate,
  nameValidate,
  passwordValidate,
} from "../../common/validator";
import SignHeader from "../../components/SignHeader/SignHeader";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
interface FormInput {
  username: string;
  name: string;
  password: string;
}
interface FormErrors {
  username: boolean;
  name: boolean;
  password: boolean;
}

const SignupScreen: React.FC = () => {
  const [formInput, setFormInput] = useState<Partial<FormInput>>({});
  const [errors, setErrors] = useState<Partial<FormErrors>>({
    username: true,
    name: true,
    password: true,
  });
  let navigate = useNavigate();
  const onSubmit = () => {
    setErrors({
      ...errors,
      username: userNameValidate(formInput.username || ""),
      name: nameValidate(formInput.name || ""),
      password: passwordValidate(formInput.password || ""),
    });
  };

  return (
    <div
      className={`login-signup-screen flex flex-col justify-center items-center`}
    >
      <div className="bg-slate-50 p-12 flex flex-col justify-center items-center text-deepslate-400 rounded-xl w-5/6  2xl:w-2/6 md:w-4/6 sm:w-5/6">
        {/* <img src="../../assets/images/darklogo.png" alt="" className="w-24" /> */}
        <SignHeader title="Sign up" />
        <h5 className="text-2xl">Create account for full access</h5>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="w-full border-2 border-blue-400 rounded-lg py-2 px-2 outline-none text-xl font-semibold mt-2 mb-2"
          onInput={(e) =>
            setFormInput({
              ...formInput,
              username: (e.target as HTMLTextAreaElement).value,
            })
          }
          value={formInput.username || ""}
        />
        {errors.username ? (
          <></>
        ) : (
          <Alert status="error">
            <AlertIcon />
            username length Must me 7-20
          </Alert>
        )}

        <input
          type="text"
          name="name"
          placeholder="name"
          className="w-full border-2 border-blue-400 rounded-lg py-2 px-2 outline-none text-xl font-semibold mt-2 mb-2"
          onInput={(e) =>
            setFormInput({
              ...formInput,
              name: (e.target as HTMLTextAreaElement).value,
            })
          }
          value={formInput.name || ""}
        />
        {errors.name ? (
          <></>
        ) : (
          <Alert status="error">
            <AlertIcon />
            name min length 7
          </Alert>
        )}
        <input
          type="password"
          name="password"
          className="w-full border-2 border-blue-400 rounded-lg py-2 px-2 outline-none text-xl font-semibold mb-2 mt-2"
          placeholder="password"
          onInput={(e) =>
            setFormInput({
              ...formInput,
              password: (e.target as HTMLTextAreaElement).value,
            })
          }
          value={formInput.password || ""}
        />
        {errors.password ? (
          <></>
        ) : (
          <Alert status="error" mb={"4"}>
            <AlertIcon />
            Password shoud contain al least 6 charators
          </Alert>
        )}
        <button
          className="bg-blue-400 w-full py-3 rounded-lg text-extrawhite-300  font-bold "
          onClick={onSubmit}
        >
          Sign up
        </button>
        <p className="mt-2">
          Don't have an account yet?{" "}
          <span
            className=" hover:text-blue-600 hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
