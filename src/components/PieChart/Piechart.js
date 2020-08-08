import React, { useState, useEffect } from 'react';
import { Pie} from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import'../Chart/Chart.css';

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
  const [, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

//   const pieChart = (
//     confirmed ? (
//       <Pie
//         data={{
//           labels: ['Infected', 'Recovered', 'Deaths'],
//           datasets: [
//             {
//               label: 'People',
//               backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//               data: [confirmed.value, recovered.value, deaths.value],
//             },
//           ],
//         }}
//         options={{
//           legend: { display: false },
//           title: { display: true, text: `Current state in ${country}` },
//         }}
//         />
//     ) : null
//   );

  const pieChart = (
      confirmed?(
      <Pie
      data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [
                    {backgroundColor: [
                        '#718096',
                        '#38a169',
                        '#e53e3e'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                  ],
                }}
      />
      ):null
  );

  
  return (
    <div>
      {pieChart}
    </div>
  );
};

export default Chart;