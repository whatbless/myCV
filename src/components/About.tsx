import React from "react";
import "./../index.css";
import { NavLink } from "react-router-dom";

const About = () => {
  const skills = [
    { title: "JavaScript" },
    { title: "HTML5" },
    { title: "CSS3" },
    { title: "SCSS" },
    { title: "React" },
    { title: "Redux" },
    { title: "TypeScript" },
    { title: "Jest-testing" },
    { title: "axios" },
    { title: "Webpack" },
    { title: "Git" },
    { title: "REST Api" },
    { title: "C#" },
    { title: "bootstrap" },
    { title: "ООП" },
    { title: "tailwind" },
  ];

  return (
    <div className="bg-bg min-h-screen">
      <div className="container mx-auto text-white font-bold">
        <div className="flex flex-wrap justify-center items-start h-full w-full">
          <p className="text-center text-4xl w-full color-pears mt-32">
            Здравствуйте, в этом разделе я хочу рассказать немного о себе:
          </p>
          <div className="bg-yellow w-full py-px rounded-full mt-4"></div>
          <div className="flex flex-row justify-between mt-10">
            <div className="bg-gradient w-1/4 h-max py-14 px-10 rounded-3xl">
              Зовут меня Синицын Роман Александрович {" ( "}не люблю
              официальности, поэтому больше предпочитаю{" "}
              <span className="color-pears">ромчик</span>
              {" )"}. 18 лет, живу в Самаре с братом, все родные у меня в другом
              городе.
            </div>
            <div className="bg-gradient w-1/4 h-max px-10 py-10 rounded-3xl">
              Образование у меня среднее общее, окончил 11 классов, в данный
              момент учусь в{" "}
              <span className="color-pears">
                Самарском национальном исследовательском университете имени
                академика С.П. Королева
              </span>{" "}
              на первом курсе. Из дополнительного образования состою в{" "}
              <span className="color-pears">StartUp клубе</span>, думаю мысль
              что я хочу от этого клуба сама по себе прослеживается. Неплохо
              владею английским языком {" ( "} примерно на уровне Intermidate{" "}
              {" ) "}
            </div>
            <div className="bg-gradient w-1/4 h-max px-10 py-10 rounded-3xl">
              Немного погрузимся в мою профессиональную деятельность: как
              такового опыта работы у меня пока что нету, есть только парочка
              проектов, которые я редко пишу для практики, их вы можете увидеть
              перейдя по{" "}
              <NavLink to="/projects" className="color-pears">
                ссылке
              </NavLink>
              {", "}
              либо по ссылке в навигационном блоке{" "}
              <span className="color-pears">Projects</span>
            </div>
          </div>
          <p className="mt-10 text-xl">Мои ключевые навыки:</p>
          <div className="flex flex-wrap w-full justify-center">
            {skills.map((skill) => (
              <div className="skill">{skill.title}</div>
            ))}
          </div>
          <p className="my-10 text-xl text-start">
            Заинтересовал или хотите связаться со мной для уточнения какого-либо
            вопроса, можете сделать это по{" "}
            <NavLink to="/contacts" className="color-pears">
              ссылке
            </NavLink>
            , либо по ссылке в навигационном блоке{" "}
            <span className="color-pears">Contacts</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
