import React from "react";
import logo from "../../assets/Break-The-Box-Content.png";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";
import name from "../../assets/Fortune Teller-01.png";
import tia from "../../assets/tia_00182.png";

const Page2 = () => {
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
              <img src={name} className="w-1/4 mx-auto z-30" alt="brandName" />
            </div>

            <div className="relative mx-auto ">
              <img src={card1} className="w-[20%] mx-auto " alt="Card" />
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

export default Page2;
