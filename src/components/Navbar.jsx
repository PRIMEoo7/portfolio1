/* eslint-disable no-unused-vars */
import React from "react";
import Main from "./Main";

export default function Navbar() {
  const links = [
    ["LinkedIn", "http://www.google.com"],
    ["GitHub", "http://www.google.com"],
    ["YouTube", "http://www.google.com"],
  ];
  return (
    <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm">
      <a className="text-sm sm:text-base" href="/">
        SM
      </a>

      <div className="flex item-center gap-4">
        {links.map((link, index) => {
          return (
            // eslint-disable-next-line react/jsx-key, react/jsx-no-target-blank
            <a key={index} href={link[1]} target="_blank">
              {link[0]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
