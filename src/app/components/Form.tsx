"use client"

import React, {FormEvent} from "react";


const Form: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <legend className="text-center text-3xl font-mono font-extrabold text-white mb-4">
          Indentify Yourself
        </legend>
        <div className="flex flex-col w-full max-w-md">
          <div className="mb-4">
            <input
              className="border-2 border-gray-600 bg-gray-700 bg-opacity-80 rounded-lg text-xl text-white p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              name="email/number"
              placeholder="Email or Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border-2 border-gray-600 bg-gray-700 bg-opacity-80 rounded-lg text-xl text-white p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-white">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
        <p className="text-gray-300 text-center mt-4">
          This page uses CAPTCHA to ensure you're not a robot.
          <a
            href="https://www.google.com"
            className="text-purple-400 hover:underline"
          >
            {" "}
            Learn more
          </a>
          .
        </p>
      </fieldset>
    </form>
  );
}

export default Form;
