import React, { useState, useEffect } from 'react';
import calculateMean from '../utils/mean';
import calculateMedian from '../utils/median';
import calculateMode from '../utils/mode';

const Flavanoids = ({ dataset }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Grouping data for "Alcohol" attribute
    const groupedData = dataset.reduce((acc, curr) => {
      const { Alcohol, Flavanoids } = curr;
      if (!acc[Alcohol]) {
        acc[Alcohol] = [];
      }

      // Pushing Flavanoids values to the corresponding group
      acc[Alcohol].push(Flavanoids);
      return acc;
    }, {});

    // Sort Flavanoids values within each group
    for (let Alcohol in groupedData) {
      groupedData[Alcohol].sort((a, b) => a - b);
    }

    // Calculating mean, median and mode for each group
    const newData = Object.keys(groupedData).map((Alcohol) => {
      const mean =
        Math.round(calculateMean(groupedData[Alcohol]) * 1000) / 1000;

      const median =
        Math.round(calculateMedian(groupedData[Alcohol]) * 1000) / 1000;

      const mode =
        Math.round(calculateMode(groupedData[Alcohol]) * 1000) / 1000;

      // Returning object containing Alcohol, mean, median and mode of curr. group
      return { Alcohol, mean, median, mode };
    });

    // Updating state with new data
    setTableData(newData);
  }, [dataset]);

  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <th style={{ border: '2px solid black', padding: '8px' }}>
              Measure
            </th>
            {Object.keys(tableData).map((key) => (
              <th
                key={key}
                style={{ border: '2px solid black', padding: '8px' }}
              >
                Class {parseInt(key) + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          <tr>
            <td
              style={{
                border: '2px solid black',
                padding: '8px',
              }}
            >
              Flavanoids Mean
            </td>
            {tableData.map((data, index) => (
              <td
                key={index}
                style={{ border: '2px solid black', padding: '8px' }}
              >
                {data.mean}
              </td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '2px solid black', padding: '8px' }}>
              Flavanoids Median
            </td>
            {tableData.map((data, index) => (
              <td
                key={index}
                style={{ border: '2px solid black', padding: '8px' }}
              >
                {data.median}
              </td>
            ))}
          </tr>
          <tr>
            <td style={{ border: '2px solid black', padding: '8px' }}>
              Flavanoids Mode
            </td>
            {tableData.map((data, index) => (
              <td
                key={index}
                style={{ border: '2px solid black', padding: '8px' }}
              >
                {data.mode}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Flavanoids;
