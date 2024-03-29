/* eslint-disable react/jsx-key */
import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Company 1",
      position: "Awesome Engg",
      description:
        "Whole lot of awesome things, But dont really remember anything so you have to take my word on it!",
    },
    {
      company: "Company 2",
      position: "Dope Engg",
      description:
        "Whole lot of dope things, But dont really remember anything so you have to take my word on it!",
    },
    {
      company: "Company 3",
      position: "Cool Engg",
      description:
        "Whole lot of cool things, But dont really remember anything so you have to take my word on it!",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="flex flex-col gap-1">
            <h1 className="text-lg font-bold uppercase">
              {experience.company}
            </h1>
            <h2 className="text-sm pb-2">{experience.position}</h2>
            <p className="text-slate-500">{experience.description}</p>
          </div>
        );
      })}
    </div>
  );
}
