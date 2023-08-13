import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Landing({ toggleColModal, toggleTaskModal }) {
  const [columnsArr, setColumnArr] = useState([]);
  const [cardsMap, setCardsMap] = useState({});

  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/api/v1/colomns`);
    const fetchedColumns = response.data.data.colomns;

    const cardsData = fetchedColumns.reduce((map, col) => {
      map[col._id] = col.items;
      return map;
    }, {});

    setCardsMap(cardsData);
    setColumnArr(fetchedColumns);
  };

  // delete card form one column:
  const handleDeleteCard = async (colid, cardid) => {
    try {
      await axios.delete(
        `http://127.0.0.1:3000/api/v1/colomns/${colid}/tasks/${cardid}`
      );
      setCardsMap((prevCardsMap) => ({
        ...prevCardsMap,
        [colid]: prevCardsMap[colid].filter((card) => card._id !== cardid),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const tasksArr = columnsArr.map((el) => {
    return el.items.length;
  });

  useEffect(() => {
    fetchData();
  }, [tasksArr]); // The component will rendered to change the value of tasks in each column >> TODO(2)

  const handleClick = () => {
    toggleColModal();
  };

  //  لا تنسى تعمل كنترولر عشان تحذف التاسكات يلي جوا العمود كمان

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/v1/colomns/${id}`);
      setColumnArr(columnsArr.filter((el) => el._id !== id));
      //   setTaskArr(
      //     columnsArr.map((el) => {
      //       return el.items;
      //     })
      //   );
    } catch (err) {
      console.log(err);
    }
  };

  // Map to get columns:
  const colArr = columnsArr.map((el) => {
    return (
      <div key={el._id} className="col-span-1 flex flex-col ">
        <div className="flex flex-row justify-start items-center gap-3">
          <div
            className="dot w-[10px] h-[10px] rounded-full"
            style={{ background: `${el.color}` }}
          ></div>
          <div className="flex flex-row w-full justify-between items-center drop-shadow-md">
            <p className="text-[#5d616d]">
              {el.type} ({el.items.length})
            </p>
            <button onClick={() => handleDelete(el._id)}>
              <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col drop-shadow-md ">
          {/* Map inside each column to add the items for it*/}
          {cardsMap[el._id].map((card) => (
            <Card
              el={card}
              key={card._id}
              handleCardDelete={handleDeleteCard}
              toggleTaskModal={toggleTaskModal}
            />
          ))}
        </div>
      </div>
    );
  });

  return (
    
    <div className="grid grid-cols-4 grid-flow-col bg-[#23232f] min-h-[607px] p-[2em] gap-[2em] ">
      {colArr}
      <div className="col-span-1 flex flex-col">
        <div className="flex flex-row justify-start items-center gap-3"></div>
        <div className="flex flex-col justify-center items-center text-white h-full">
          <button onClick={handleClick} className="text-[#41444d] text-3xl">
            +New Column
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

/* 
<div className="col-span-1 flex flex-col">
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="dot w-[10px] h-[10px] rounded-full bg-[#6ddbad]"></div>
          <p className="text-[#5d616d]">DONE (7)</p>
        </div>
        <div className="flex flex-col">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
*/
