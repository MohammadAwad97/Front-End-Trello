// import React, { useState } from 'react'

import axios from "axios";

function Card({ el, handleCardDelete, toggleTaskModal }) {
  //Click will change the
  const handleShowModalTask = () => {
    toggleTaskModal();
  };

  return (
    <div className="flex flex-col bg-[#2c2c38] pl-[1em] pr-[1em] pt-[1em] pb-[1em] rounded-2xl mt-[1em] cursor-pointer">
      <div className="flex flex-row w-full justify-between items-center">
        <h1 className="text-l text-white">{el.title}</h1>
        <button onClick={() => handleCardDelete(el.columnId, el._id)}>
          <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
        </button>
      </div>
      <p className="text-[#5d616d]">0 of 3 substasks</p>
      <p
        onClick={handleShowModalTask}
        className="flex underline text-[#5d616d] pt-[0.6em]"
      >
        Details
      </p>
    </div>
  );
}

export default Card;
