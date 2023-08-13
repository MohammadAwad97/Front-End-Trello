import { useState } from "react";
import axios from "axios";
// import React, { useState } from "react";

function ColumnModal({ showColumnModal, toggleColModal }) {
  const [column, setColumn] = useState({
    type: "",
    color: "",
  });

  const handleChange = (e) => {
    setColumn({ ...column, [e.target.name]: e.target.value });
  };

  //Handle post data in DB:
  const handleClickForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/api/v1/colomns`,
        column
      );
    } catch (err) {
      console.log(err);
    }
    toggleColModal();
  };

  const handleClick = () => {
    toggleColModal();
  };

  if (!showColumnModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="container flex flex-col  w-[500px] min-h-[100px] ml-[4em]  bg-[#2c2c38] p-[2em]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-2xl text-white mb-[1em]">Add New Column</h1>
          <button onClick={handleClick} className="pb-[20px]">
            <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
        <form>
          <label className="text-white">Type:</label>
          <br />
          <input
            style={{ textTransform: "uppercase" }}
            name="type"
            onChange={handleChange}
            className="mb-[1em] w-full border-2 bg-[#2c2c38] mt-1 rounded-md text-white"
            placeholder="TODO..."
          />
          <br />
          <label className="text-white">Color:</label>
          <br />
          <input
            name="color"
            onChange={handleChange}
            className="mb-[1em] w-full border-2 bg-[#2c2c38] mt-1 rounded-md text-white"
            placeholder="Add color..."
          />
          <br />
          <button
            onClick={handleClickForm}
            className="w-full bg-[#645ec5] mt-[1em] p-[0.6em] mb-[1em] rounded-3xl"
          >
            Add Column
          </button>
        </form>
      </div>
    </div>
  );
}

export default ColumnModal;
