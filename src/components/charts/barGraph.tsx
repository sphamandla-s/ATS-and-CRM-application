"use client"

import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  Title, Tooltip, Legend,
  BarElement
} from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type HiringManagerData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string; // Optional: Set the fill color for the bar
  }[];
}

function HiringManagerActivity() {

  const data: HiringManagerData = {
    labels: ['March', 'April', 'May'],
    datasets: [
      {
        label: 'Applications Reviewed',
        data: [20, 35, 15],
        backgroundColor: 'rgba(75,192,192,0.2)'
      },
      {
        label: 'Interviews Conducted',
        data: [10, 15, 5], 
        backgroundColor: 'rgba(255,159,64,0.2)',
      },
      {
        label: 'Offers Made',
        data: [5, 8, 2], 
        backgroundColor: 'rgba(153,102,255,0.2)',
        
      },
    ],
  };

  const options = {};

  return (
    <div className=' w-full'>
      <Bar options={options} data={data} />

    </div>
  )
}

export default HiringManagerActivity
