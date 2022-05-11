import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props) {
  const {analysis, labelsOn} = props;
  const {positive, negative, joy, anger, trust, totalCount} = analysis;
  console.log(props)
  const labels = labelsOn ? ['postitive', 'negative', 'joy', 'fear', 'trust'] : null;
  const data = {
    labels,
    datasets: [
      {
        label: 'Tone Analysis',
        data: [positive, negative, joy, anger, trust],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, )',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default DoughnutChart;