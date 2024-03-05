import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";

const ForexChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Label1", "Label2", "Label3"], // Sample labels
        datasets: [
          {
            label: "Dataset 1",
            data: [10, 20, 30], // Sample data
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <React.Fragment>
      <canvas ref={chartRef} />
    </React.Fragment>
  );
};

export default ForexChart;
