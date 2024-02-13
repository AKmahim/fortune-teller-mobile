import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import bname from "../../assets/Fortune Teller-01.png";
import tia from "../../assets/tia_00182.png";
import logo from "../../assets/Break-The-Box-Content.png";

const Page3 = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    logMovies();
  }, []);

  async function logMovies() {
    const response = await fetch(
      "https://sunquick-scoreboard.xri.com.bd/fortune-teller/last-user"
    );
    const movies = await response.json();
    setName(movies.user_name);
  }

  return (
    <>
      <section className="relative bg-[#F4ECE1] bg-[url('/src/assets/zodiac-01-01.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed">
        <div className="mx-auto max-w-screen-xl px-4  flex h-screen items-center">
          <div className="mx-auto max-w-7xl text-center ">
            <div className="relative mx-auto  mt-20">
              <img
                src={tia}
                className="  lg:w-1/3 md:w-1/2 w-[70%] mx-auto emad absolute lg:-top-28 xl:-top-36 md:-top-32 -top-24 right-[47%] "
                alt=""
              />
              <img
                src={bname}
                className=" lg:w-1/3  md:w-1/2 w-[70%] mx-auto z-30"
                alt="brandName"
              />
            </div>

            {console.log(name)}
            {name && (
              <p className="text-3xl my-3 bg-gradient-to-t from-[#400c43] to-[#820d96] bg-clip-text font-extrabold text-transparent">
                Welcome {name.toLocaleUpperCase()}
              </p>
            )}

            <p className=" w-[100%] textgradient text-xl md:text-3xl lg:text-4xl emad bg-gradient-to-t from-[#eb475c] to-[#fba209] bg-clip-text font-extrabold text-transparent ">
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "100px",
                  display: "block",
                }}
                className="lg:h-[100px] lg:text-4xl "
                sequence={[
                  `“Your horoscope advises you to\n wear pants today. Trust us,it's for the best”`,
                  1000,
                ]}
              />
            </p>
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

export default Page3;
