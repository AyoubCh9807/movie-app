"use client"

import React from "react";
import { users } from "../../../public/data/users";

const page = () => {
  let lastId = '7'
  let usernameId = 0
  return (
    <>
      <p className='text-3xl text-center font-sans font-bold'>THE USER DATABASE</p>
      <div className="flex flex-row justify-evenly bg-blue-300 px-2 py-5">
        <p className="text-blue-700 bg-blue-400 font-mono font-extrabold text-center w-full">username</p>
        <p className="text-blue-700 bg-blue-400 font-mono font-extrabold text-center w-full">email</p>
        <p className="text-blue-700 bg-blue-400 font-mono font-extrabold text-center w-full">password</p>
        <p className="text-blue-700 bg-blue-400 font-mono font-extrabold text-center w-full">id</p>
      </div>

      {users.map((user, index) => {
        return(
          <div className="flex justify-evenly" key={index}>
            <p className="text-blue-600 bg-blue-200 text-center w-full hover:text-blue-300 hover:bg-blue-900"> {user.username} </p>
            <p className="text-blue-600 bg-blue-200 text-center w-full hover:text-blue-300 hover:bg-blue-900"> {user.email} </p>
            <p className="text-blue-600 bg-blue-200 text-center w-full hover:text-blue-300 hover:bg-blue-900"> {user.password} </p>
            <p className="text-blue-600 bg-blue-200 text-center w-full hover:text-blue-300 hover:bg-blue-900"> {user.id} </p>
          </div>
        );
      })}
      <div className="grid place-content-center my-5">
        <div className="flex flex-col align-center justify-evenly gap-5">
        <button className="px-5 py-2 bg-purple-700 border-4 border-white rounded-lg font-bold font-sans hover:bg-purple-900 transition-colors duration-200 hover:cursor-pointer">ADD NEW ENTRY</button>
        <button className="px-5 py-2 bg-purple-700 border-4 border-white rounded-lg font-bold font-sans hover:bg-purple-900 transition-colors duration-200 hover:cursor-pointer">DELETE ENTRY</button>
        <button className="px-5 py-2 bg-purple-700 border-4 border-white rounded-lg font-bold font-sans hover:bg-purple-900 transition-colors duration-200 hover:cursor-pointer">MODIFY ENTRY</button>
        <button className="px-5 py-2 bg-purple-700 border-4 border-white rounded-lg font-bold font-sans hover:bg-purple-900 transition-colors duration-200 hover:cursor-pointer"><a href="./">RETURN</a></button>
        </div>
      </div>
    </>
  );
};

export default page;
