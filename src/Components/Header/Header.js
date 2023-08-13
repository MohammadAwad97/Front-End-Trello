// import React, { useState } from "react";

function Header({ toggleModal }) {
  const handleClick = () => {
    toggleModal();
  };

  return (
    <nav className=" flex flex-row bg-[#2c2c38] border-2 w-full h-[100px] justify-between items-center p-[1em] border-[#33333f]">
      <h2 className="text-white text-3xl ">Platform Launch</h2>
      <div className="flex flex-row w-[200px] justify-center items-center gap-[2em]">
        <button
          onClick={handleClick}
          className="flex bg-[#625eca] text-white p-[1em] pt-[0.7em] pb-[0.7em] rounded-3xl"
        >
          +Add New Task
        </button>
        <i
          class="fa-solid fa-ellipsis-vertical text-xl"
          style={{ color: "#ffffff" }}
        ></i>
      </div>
    </nav>
  );
}

export default Header;
