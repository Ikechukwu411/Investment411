import React from "react";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "september",
  "October",
  "Novemember",
  "December",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "online users", // Setting up the label for the dataset
      backgroundColor: "rgb(255, 99, 132)", // Setting up the background color for the dataset
      borderColor: "rgb(255, 99, 132)", // Setting up the border color for the dataset
      data: [20, 10, 5, 50, 20, 30, 45, 60, 77], // Setting up the data for the dataset
    },
  ],
};
const Progress2 = () => {
  return (
    <React.Fragment>
      <Line data={data} />
    </React.Fragment>
  );
};

export default Progress2;
