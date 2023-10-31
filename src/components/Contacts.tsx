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
          <div className="text-center text-4xl w-full color-pears mt-32">
            В данном разделе вы можете найти способ связи со мной
          </div>
          <div className="bg-yellow w-full py-px rounded-full mt-4"></div>
          <div className="uppercase text-xl mt-10 mb-3 text-start w-full">
            Милый факт обо мне: очень быстро продаюсь{" "}
            <span className="px-10 py-5 bg-red-500 rounded-2xl ml-5">
              FOR SALE!!!
            </span>
          </div>
          <div className="flex flex-row w-full ">
            <div className="flex flex-row w-full mt-56 justify-start">
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
            <div className="mt-10 offer">
              <img src={offer} alt="offer-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
