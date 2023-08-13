import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const [columnsArr, setColumnArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:3000/api/v1/colomns`
        );
        setColumnArr(response.data.data.colomns);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [columnsArr]);

  const data = {
    labels: columnsArr.map((el) => el.type),
    datasets: [
      {
        label: "Dataest 1",
        data: columnsArr.map((el) => { 
          return el.items.length;
        }),
        backgroundColor: columnsArr.map((el) => el.color),
        borderColor: "black",
      },
    ],
  };

  const options = {
    width: "300px",
    indexAxis: "y",
    responsive: true,
    title: {
      display: true,
    },
    bar: {
      borderWidth: 2,
    },
    scales: {
      x: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-3xl mb-[3em] mt-[2em]">User Progress statistics:</h1>
      <div className="flex flex-col w-[1000px] justify-center items-center">
        <Bar height={100} data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
