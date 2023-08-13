import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <aside className="flex flex-col bg-[#2c2c38] w-[250px] h-[100vh] pt-[4em] justify-between items-center pb-[5em]">
      <div className="flex flex-col text-[#717689] gap-1">
        <div className="mb-2">All boards (8)</div>
        <ul className="flex flex-col ">
          <Link
            to="/"
            className="flex flex-row gap-2 justify-start items-center hover:bg-[#625fca] hover:text-white p-[1em] hover:rounded-r-lg pl-0"
          >
            <i className="fa-solid fa-table-columns text-[#717689] hover:text-white"></i>
            <li>Platform Launch</li>
          </Link>
          <Link
            to="/chart"
            className="flex flex-row gap-2 justify-start items-center hover:bg-[#625fca] hover:text-white p-[1em] hover:rounded-r-lg pl-0"
          >
            <i class="fa-solid fa-table-columns text-[#717689]"></i>
            <li>Marketing Plan</li>
          </Link>
          <a
            href="#/"
            className="flex flex-row gap-2 justify-start items-center hover:bg-[#625fca] hover:text-white p-[1em] hover:rounded-r-lg pl-0"
          >
            <i class="fa-solid fa-table-columns text-[#717689]"></i>
            <li>Road Map</li>
          </a>

          <a
            href="#/"
            className="flex flex-row gap-2 justify-start items-center text-[#565275]"
          >
            <i class="fa-solid fa-table-columns"></i>
            <li>+Create New Board</li>
          </a>
        </ul>
      </div>

      <div className="toggleArea flex flex-col w-full pr-[1.5em] pl-[1.5em] gap-4">
        <div className="flex flex-row bg-[#21212d] w-full justify-center items-center gap-[2em] pt-[0.6em] pb-[0.6em] rounded-md">
          <i className="fa-regular fa-sun" style={{ color: "#ffffff" }}></i>
          <i
            class="fa-solid fa-toggle-on text-lg"
            style={{ color: "#625dcd" }}
          ></i>
          <i class="fa-solid fa-moon" style={{ color: "#ffffff" }}></i>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <i className="fa-solid fa-eye-slash text-[#717689]"></i>
          <p className="text-[#717689]">Hide Sidebar</p>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
