import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import bname from "../../assets/fortune-teller.png";
import tia from "../../assets/tia.png";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPredictionByID } from "../../utilities/utilities";

const Page3 = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [predictionNumber, setPredictionNumber] = useState("");
  const [predictionText, setPredictionText] = useState("");
  const [cardIdFromURL, setCardIdFromURL] = useState(null);
  const [viewFromCard, setViewFromCard] = useState(true);
  const [wrongMsg, setWrongMsg] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cardValue = queryParams.get("card");

  const wrongCardText = "Ops! You Pick The Wrong Card";

  console.log("cardvalue, cardidurl", cardValue, cardIdFromURL);
  useEffect(() => {
    logMovies();
    setCardIdFromURL(cardValue);
  }, [name]);

  useEffect(() => {
    // if (getIdFromCode(code) === cardNumber) {
    //   setWrongMsg(true);
    //   navigate("/fortune-view");
    //   e.target.code.value = "";
    // } else {
    //   setWrongMsg(false);
    //   e.target.code.value = "";
    // }
    console.log("card", card, cardIdFromURL);
    // if (!cardIdFromURL) {
    if (parseInt(cardIdFromURL) === card) {
      setViewFromCard(true);
      setWrongMsg(true);
      console.log("match");
    } else {
      setViewFromCard(false);
      setWrongMsg(false);
      console.log("not match", card, cardIdFromURL);
    }
    // }
  }, [card, cardIdFromURL]);

  async function logMovies() {
    const response = await fetch(
      "https://sunquick-scoreboard.xri.com.bd/fortune-teller/last-user"
    );
    const movies = await response.json();
    // console.log(movies)
    setName(movies.user_name);
    setPredictionNumber(movies.prediction);
    setCard(movies.card);
    const predictionName = await getPredictionByID(predictionNumber);
    setPredictionText(predictionName);
  }

  return (
    <>
      <section className="relative bg-[#F4ECE1] bg-[url('/src/assets/bg-1.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed">
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

            {name && (
              <p className="text-3xl my-3 bg-gradient-to-t from-[#400c43] to-[#820d96] bg-clip-text font-extrabold text-transparent">
                Welcome {name.toLocaleUpperCase()}
              </p>
            )}
            {console.log(wrongMsg)}
            {predictionText && wrongMsg && (
              <p className=" w-[100%] textgradient text-xl md:text-3xl lg:text-4xl emad bg-gradient-to-t from-[#eb475c] to-[#fba209] bg-clip-text font-extrabold text-transparent ">
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "100px",
                    display: "block",
                  }}
                  className="lg:h-[100px] lg:text-4xl "
                  sequence={[predictionText, 1000]}
                />
              </p>
            )}
            {!wrongMsg && (
              <div
                className="inline-block bg-gradient-to-t from-[#400c43] to-[#820d96] p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                
                <span className="sr-only">Info</span>
                <div className="inline">
                  <span className="font-medium">You Pick A Wrong Card!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <img
          src={logo}
          className=" lg:w-24 md:w-20 w-12 absolute bottom-8 right-8 element"
          alt="logo"
        />
      </section>
    </>
  );
};

export default Page3;
