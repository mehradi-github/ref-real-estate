import React, { FC } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const Client: FC = () => {
  const client = () => (
    <div className="p-4 shadow-lg bg-white rounded-xl w-72 mx-auto">
      <p className="text-gray-600">
        <span className="text-green-500 text-lg font-bold">"</span>
        lorePariatur ipsum non non excepteur ea do voluptate amet laboris non
        nulla est aliquip aute. Amet occaecat laborum culpa ea magna sit. Non
        nostrud amet ea cupidatat magna irure irure nostrud amet dolor.
        <span className="text-green-500 text-lg font-bold">"</span>
      </p>
      <div className="flex bg-green-100 rounded-full items-center mt-5">
        <a href="" className="block relative">
          <UserCircleIcon className="w-10 h-10 text-green-900 mx-auto" />
        </a>
        <div className="flex flex-col ml-2 justify-between">
          <span className="text-sm text-semibold text-green-500 ">
            Ashutosh
          </span>
          <span className="text-xs flex items-center">Director</span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {[1, 2, 3].map(() => client())}
    </div>
  );
};
export default Client;
