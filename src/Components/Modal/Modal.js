// import React, { useState } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Modal({ showModal, toggleModal }) {
  const [columnsArr, setColumnsArr] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });

  // To get the Types Array
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/api/v1/colomns`);
    setColumnsArr(response.data.data.colomns);
  };
  const taskArr = columnsArr.map((el) => {
    return el.items;
  });

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleClickForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:3000/api/v1/tasks`,
        task
      );
    } catch (err) {
      console.log(err);
    }
    // toggleModal(); لازم تنقلها على كبسة الزر الثاني 
  };

  const handleClick = () => {
    toggleModal();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="container flex flex-col  w-[500px] min-h-[600px] ml-[4em]  bg-[#2c2c38] p-[2em]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-2xl text-white mb-[1em]">Add New Task</h1>
          <button onClick={handleClick} className="pb-[20px]">
            <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
        <form>
          <label className="text-white">Title</label>
          <br />
          <input
            onChange={handleChange}
            name="title"
            className="mb-[1em] w-full border-2 bg-[#2c2c38] mt-1 rounded-md text-white"
            placeholder="e.g.Take coffee break"
          />
          <br />
          <label className="text-white">Description</label>
          <br />
          <textarea
            name="description"
            onChange={handleChange}
            className="mb-[1em] w-full border-2 bg-[#2c2c38] mt-1 rounded-md resize-none h-[150px] text-white"
            placeholder="e.g. It's always good to take a break. This is 15 minute break will recharge the power a little."
          />
          <br />
          <label className="text-white">Subtasks</label>
          <br />
          <input
            className="w-full border-2 bg-[#2c2c38] mt-1 rounded-md text-white"
            placeholder="e.g.Make coffee"
          />
          <br />
          <input
            className="w-full border-2 bg-[#2c2c38] mt-1 rounded-md text-white"
            placeholder="e.g. Drink coffee & smile"
          />
          <br />
          <button className="w-full bg-white mt-[1em] p-[0.6em] mb-[1em] rounded-3xl">
            +Add New Subtask
          </button>
          <br />
          <lable className="text-white ">Status</lable>
          <br />
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border-2 bg-[#2c2c38] mt-1 rounded-md text-white "
          >
            <option value={""} disabled selected>
              Select the status
            </option>
            {columnsArr.map((el) => {
              return <option key={el._id}>{el.type}</option>;
            })}
          </select>
          {/* <input className="w-full border-2 bg-[#2c2c38] mt-1 rounded-md" placeholder="Todo"/> */}
          <br />
          <button
            onClick={handleClickForm}
            className="w-full bg-[#645ec5] mt-[1em] p-[0.6em] mb-[1em] rounded-3xl"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
