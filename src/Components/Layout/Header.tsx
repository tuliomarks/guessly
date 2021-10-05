import React from "react";

const Header = () => {
  return (
      <header className="flex items-center justify-center flex-wrap bg-primary-600 p-4" >
        <a className="font-bold text-xl text-white flex items-center" href="/" rel="noreferrer">
          <img src="\images\logo.png" className="w-12 float-left mr-4"/>
          <span>Guessly!</span>
        </a>
      </header>
  );
}

export default Header;
