import React from "react";
import "./../index.css";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import offer from "./../images/offer.png";

const Contacts = () => {
  return (
    <div className="bg-bg min-h-screen">
      <div className="container mx-auto text-white font-bold">
        <div className="flex flex-wrap justify-center items-start h-full w-full">
          <div className="text-center lg:text-4xl md:text-3xl text-2xl w-full color-pears mt-32 mx-10">
            В данном разделе вы можете найти способ связи со мной
          </div>
          <div className="bg-yellow w-full py-px rounded-full mt-4 mx-10"></div>
          <div className="uppercase text-xl mt-10 text-start w-full mx-10 flex lg:flex-row flex-col">
            <div className="my-5 lg:mx-0 mx-auto lg:text-start text-center">
              Милый факт обо мне: очень быстро продаюсь
            </div>
            <span className="px-10 py-5 w-max bg-red-500 rounded-2xl lg:ml-5 mx-auto z-10">
              FOR SALE!!!
            </span>
          </div>
          <div className="flex xl:flex-row flex-col-reverse w-full 2xl:mt-20 mt-32">
            <div className="flex flex-row w-full justify-center xl:items-center mb-10">
              <a href="https://vk.com/whatbless" target="_blank">
                <FontAwesomeIcon className="text-6xl mx-10 icon" icon={faVk} />
              </a>
              <a href="https://github.com/whatbless" target="_blank">
                <FontAwesomeIcon
                  className="text-6xl mx-10 icon"
                  icon={faGithub}
                />
              </a>
              <a href="https://t.me/whatbless" target="_blank">
                <FontAwesomeIcon
                  className="text-6xl mx-10 icon"
                  icon={faTelegram}
                />
              </a>
            </div>
            <div className="flex flex-row w-full justify-center">
              <div className="xl:mx-20 mx-10 offer mb-20">
                <img src={offer} alt="offer-img" className="sm:h-96 h-max" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
