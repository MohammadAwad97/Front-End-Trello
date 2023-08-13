import React from "react";

function TaskModal({ showTaskModal, toggleTaskModal }) {
  if (!showTaskModal) return null;

  const handleUnshowModal = () => {
    toggleTaskModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="container flex flex-col  w-[500px] min-h-[600px] ml-[4em]  bg-[#2c2c38] p-[2em]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-2xl text-white mb-[1em]">
            Research pricing points of various
            <br />
            competitors and trail different business models
          </h1>
          <button onClick={handleUnshowModal} className="pb-[20px]">
            <i
              className="fa-solid fa-xmark border-2 border-[#585d6b] p-1"
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </div>
        <p className="mb-3 text-[#585d6b]">
          We know what we're palnning to-build for version one.Now we need to
          finallse the first pricing model we'll use.Keep iterating the subtasks
          until we have a coherent proposition.
        </p>
        <h3 className="mb-[1em] text-white">Subtasks(2 of 3)</h3>
        <form>
          <div className="flex flex-row w-full justify-start gap-[1em] text-[#585d6b] items-center bg-[#21212d] p-[1em] pt-[0.6em] pb-[0.6em] mb-[0.6em]">
            <input type="checkbox" />
            <p>Research the topic</p>
          </div>
          <div className="flex flex-row w-full justify-start gap-[1em] text-[#585d6b] items-center bg-[#21212d] p-[1em] pt-[0.6em] pb-[0.6em] mb-[0.6em]">
            <input type="checkbox" />
            <p>Research the topic</p>
          </div>
          <div className="flex flex-row w-full justify-start gap-[1em] text-[#585d6b] items-center bg-[#21212d] p-[1em] pt-[0.6em] pb-[0.6em] mb-[0.6em]">
            <input type="checkbox" />
            <p>Research the topic</p>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
