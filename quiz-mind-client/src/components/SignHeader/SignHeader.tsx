import React from "react";

type Prop = {
  title: string;
};

const SignHeader = ({ title }: Prop) => {
  return <h3 className=" font-bold text-3xl">{title}</h3>;
};

export default SignHeader;
