import React, { useState } from "react";
import logo from "../../assets/Break-The-Box-Content.png";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";
import bname from "../../assets/Fortune Teller-01.png";
import tia from "../../assets/tia_00182.png";

const Registration = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <>
      <section className="relative bg-[#F38AAA] bg-[url('/src/assets/bg2.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed h-screen">
        <div className=" mx-auto max-w-screen-xl px-4  flex h-screen items-center">
          <div className="mx-auto  max-w-7xl text-center ">
            <div className="relative mx-auto  mt-20">
              <img
                src={tia}
                className="w-1/4 mx-auto emad absolute -top-28 right-[47%] "
                alt=""
              />
              <img src={bname} className="w-1/4 mx-auto z-30" alt="brandName" />
            </div>

            <div className="relative mx-auto ">
              <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                  <form
                    onSubmit={handleSubmit}
                    className="mb-0 mt-6 bg-gradient-to-t from-[#400c43] to-[#820d96] space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                  >
                    {/* bg-gradient-to-t from-[#400c43] to-[#820d96] */}
                    <p className="w-[100%] textgradient text-xl md:text-3xl lg:text-4xl emad bg-gradient-to-t from-[#eb475c] to-[#fba209]  bg-clip-text font-extrabold text-transparent">
                      Enter Player Name
                    </p>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          onChange={handleChange}
                          name="user_name"
                          value={name}
                          className="w-full rounded-lg outline  outline-[#fba209] p-4 pe-12 text-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-[#fba209]"
                          placeholder="Enter name"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="block w-full rounded-lg bg-gradient-to-t from-[#eb475c] to-[#fba209] px-5 py-3 text-sm font-medium text-white"
                    >
                      Let's Know Your Fortune
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={logo}
          className=" lg:w-24 md:w-20 w-12 absolute bottom-8 right-8"
          alt="logo"
        />
      </section>
    </>
  );
};

export default Registration;
