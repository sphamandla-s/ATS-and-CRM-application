"use client"

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  PointElement, LineElement,
  Title, Tooltip, Legend
} from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

type LineChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string; // Optional: Set the line color
    backgroundColor?: string; // Optional: Set the fill color under the line
  }[];
}

function LineGraph() {

  const data: LineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Applications',
        data: [10, 20, 30, 50, 25, 40],
        borderColor: 'blue',
        backgroundColor: 'blue', 
      },
      {
        label: 'Number Of Jobs',
        data: [2, 4, 10, 5, 2, 4],
        borderColor: 'red',
        backgroundColor: 'red', 
      },
    ],
  };

  const options = {}; // You can add custom options here (optional)

  return (
    <div className=' w-full'>
      <Line options={options} data={data} />

    </div>
  )
}

export default LineGraph
