import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Landing from "./Components/LandingMain/Landing";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";
import ColumnModal from "./Components/ColumnModal/ColumnModal";
import TaskModal from "./Components/TaskModal/TaskModal";
import { Route, Routes } from "react-router-dom";
import BarChart from "./Components/Chart/BarChart";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showColumnModal, setshowColumnModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const toggleTaskModal = () => {
    setShowTaskModal(!showTaskModal);
  };

  const toggleColModal = () => {
    setshowColumnModal(!showColumnModal);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div classNameName="App">
      <div className="flex w-full h-full">
        <SideBar />
        <div className="flex-grow">
          <Header toggleModal={toggleModal} />
          <div className="">
            <Routes>
              {" "}
              {/* Make the Route */}
              <Route
                path="/"
                element={
                  <Landing
                    toggleTaskModal={toggleTaskModal}
                    toggleColModal={toggleColModal}
                  />
                }
              />
              <Route path="/chart" element={<BarChart />} />
            </Routes>
          </div>
          <Modal showModal={showModal} toggleModal={toggleModal} />
          <ColumnModal
            showColumnModal={showColumnModal}
            toggleColModal={toggleColModal}
          />
          <TaskModal
            toggleTaskModal={toggleTaskModal}
            showTaskModal={showTaskModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
