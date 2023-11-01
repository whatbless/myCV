import React from "react";
import pifagor1 from "./../images/pifagor1.png";
import pifagor2 from "./../images/pifagor2.png";
import social1 from "./../images/social1.png";
import social2 from "./../images/social2.png";
import social3 from "./../images/social3.png";
import itplanet1 from "./../images/it-planet1.png";
import itplanet2 from "./../images/it-planet2.png";
import git from "./../images/git.png";
import sber from "./../images/sber.png";
import "./../index.css";

const Projects = () => {
  return (
    <div className="bg-bg min-h-screen">
      <div className="container mx-auto text-white font-bold">
        <div className="flex flex-wrap justify-center items-start h-full w-full">
          <div className="text-center text-4xl w-full color-pears mt-32">
            Мои проекты и пройденные мной курсы:
          </div>
          <div className="bg-yellow w-full py-px rounded-full mt-4"></div>
          <div className="uppercase text-xl mt-5 mb-3 text-start w-full">
            Hard skill development
          </div>
          <div className="project-block w-full">
            <div className="flex flex-row space-x-5 justify-center">
              <a
                className="w-1/3"
                href="https://whatbless.github.io/pifagor/"
                target="_blank"
              >
                <img src={pifagor1} alt="project-img1" />
              </a>
              <a
                className="w-1/3"
                href="https://whatbless.github.io/pifagor/"
                target="_blank"
              >
                <img src={pifagor2} alt="project-img2" />
              </a>
            </div>
            <p className="pt-5">
              Мой первый проект - сайт-визитка своему репетитору по математике.
              Я предлагал доделать все бесплатно, но ему было не интересно, к
              сожалению {";("}
            </p>
          </div>
          <div className="project-block w-full">
            <div className="flex flex-row space-x-5 justify-center">
              <a
                className="w-1/4"
                href="https://whatbless.github.io/react-social-network/"
                target="_blank"
              >
                <img src={social1} alt="project-img3" />
              </a>
              <a
                className="w-1/4"
                href="https://whatbless.github.io/react-social-network/"
                target="_blank"
              >
                <img src={social2} alt="project-img4" />
              </a>
              <a
                className="w-1/4"
                href="https://whatbless.github.io/react-social-network/"
                target="_blank"
              >
                <img src={social3} alt="project-img5" />
              </a>
            </div>
            <p className="pt-5 px-10">
              Тут уже интереснее. Мой второй проект - некий аналог социальной
              сети, которую я немного не довел до конца, но самое важное что я
              извлек из него это бесценные знания. Я много эксперементировал в
              этом проекте {"("} там ужасно написан роутинг, если ошибка 404
              потревожит ваш экран не пугайтесь {")"}, очень много узнал о
              реакте, о архитектуре приложений и много много интересного. Можете
              протестировать функционал приложения, логин и пароль оставляю
              здесь: <br />
              <span className="color-pears">
                email: sinitsyn.roman17@mail.ru <br /> password: zM6n4!zJ6_WL4Nq
              </span>
              <br />
              Вдохновился я сделать этот проект после просмотра этого{" "}
              <a
                className="color-pears"
                href="https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8"
                target="_blank"
              >
                замечательного курса
              </a>
              {". "}
              Автор данного курса предоставил бесплатное рабочее API, почему бы
              и не попрактиковаться
            </p>
          </div>
          <div className="project-block w-full">
            <div className="flex flex-row space-x-5 justify-center">
              <a
                className="w-1/3"
                href="https://whatbless.github.io/it-planet/"
                target="_blank"
              >
                <img src={itplanet1} alt="project-img6" />
              </a>
              <a
                className="w-1/3"
                href="https://whatbless.github.io/it-planet/"
                target="_blank"
              >
                <img src={itplanet2} alt="project-img7" />
              </a>
            </div>
            <p className="pt-5 px-10">
              Проект на начальном этапе разработки, описание к нему добавлю по
              мере продвижения проекта.
            </p>
          </div>
          <div className="project-block w-full">
            <div className="flex flex-row justify-center">
              <a
                className="w-1/2"
                href="https://practicum.yandex.ru/git-basics/?from=catalog"
                target="_blank"
              >
                <img src={git} alt="project-img1" />
              </a>
            </div>
            <p className="pt-5 px-10">
              Прошел курс на Яндекс-практикуме по работе с Git'ом, чтобы в
              будущем, работая в команде не положить приложение {"( "}
              <span className="color-pears">
                забота о коллективе и успехе компании {";)"}
              </span>{" "}
              {")"}
              <br />
              ромчик иди проходи до конца!!
            </p>
          </div>
          <div className="uppercase text-xl mt-5 mb-3 text-start w-full">
            Soft skill development
          </div>
          <div className="project-block w-full">
            <div className="flex flex-row justify-center">
              <a
                className="w-1/2"
                href="https://sberuniversity.online/programs/17072"
                target="_blank"
              >
                <img src={sber} alt="project-img1" />
              </a>
            </div>
            <p className="pt-5 px-10">
              Здесь я прокачивал свои софт-скиллы. Платформа Сбер университет
              предоставляет безумно крутые курсы, которыми я успешно пользуюсь
              до сих пор. Прошел основной курс "Карьера будущего" от сбера -
              очень классный продукт. Все, больше хвалить не буду, за рекламу
              мне не заплатили. <br /> С остальными пройденными мной курсами вы
              можете ознакомится по{" "}
              <a
                className="color-pears"
                href="https://imgur.com/a/Dy6J5sK"
                target="_blank"
              >
                ссылке
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
