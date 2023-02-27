import React, { FC } from "react";
interface Iprop {
  title: string;
}
const Title: FC<Iprop> = ({ title }) => {
  return (
    <div className="mt-10 p-10 flex justify-center">
      <h2 className="text-3xl text-gray-500 mb-2">{title}</h2>
    </div>
  );
};
export default Title;
