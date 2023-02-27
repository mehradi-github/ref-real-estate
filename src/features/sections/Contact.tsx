import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="bg-green-300 mt-5 p-10 flex justify-center items-center ">
      <form className="w-full max-w-lg">
        <div className="flex">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">
              First Name
            </label>
            <input
              type="text"
              placeholder="Jane"
              className="block py-3 px-4  rounded w-full border-green-500"
            />
            <p className="text-sm text-green-500 italic">
              Please fill out this.
            </p>
          </div>
          <div className="w-full md:w-1/2 ">
            <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="block py-3 px-4  rounded w-full border-green-500"
            />
          </div>
        </div>

        <div className="w-full px-3 mb-6 ">
          <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">
            Email
          </label>
          <input
            type="text"
            placeholder="Example@gmail.com"
            className="block py-3 px-4  rounded w-full border-green-500"
          />
          <p className="text-sm italic">Please fill out this.</p>
        </div>

        <div className="w-full px-3 mb-6 ">
          <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">
            Message
          </label>
          <textarea className="no-resize appearance-none resize-none block py-3 px-4 h-48 rounded w-full border-green-500" />
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-green-400 text-white py-2 px-4 mx-2 rounded">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
