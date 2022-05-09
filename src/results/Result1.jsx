import React from 'react';
import { Chart as ChartJS, Legend, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Result1() {
  ChartJS.register(Legend, Tooltip, Title, ArcElement);

  const data = {
    labels: ['Neutral', 'Emotional'],
    datasets: [{
      data: [43, 57],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ]
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
    layout: {
      padding: 20
    }
  }

  return(
    <div style={{position: 'relative', width: '50%'}}>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  )
}