import React from "react";
import "./../index.css";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Portfolio", "CV", "Resume"],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="background">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="flex flex-col justify-center items-start h-screen w-screen pl-32">
          <div>
            <p className="color-pears font-bold text-5xl">Приветствую,</p>
            <p className="color-pears font-bold text-5xl py-5">
              меня зовут Ромчик.
            </p>
            <p className="text-white font-bold text-2xl">
              Добро пожаловать на обзор моего
            </p>
            <p className="color-grey text-6xl font-bold pt-8">
              <span ref={el}></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
