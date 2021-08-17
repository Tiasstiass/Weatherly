import { Line } from 'react-chartjs-2';

const styles = {
  container: {
    height: '12rem',
    margin: '2rem auto',
  },
  chart: {
    height: '100%',
  },
};

function Chart({ days, temp }) {
  const data = {
    labels: days,
    datasets: [
      {
        label: 'Temperature (in °C) ',
        data: temp,
        backgroundColor: 'transparent',
        borderColor: '#e1beaa',
        pointHoverBackgroundColor: 'white',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${value}°`;
          },
          precision: 0,
          color: '#ffffffb3',
        },
        // Set min & max grid
        min: temp.reduce((a, b) => Math.min(a, b)) - 1,
        max: temp.reduce((a, b) => Math.max(a, b)) + 1,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        labels: {
          color: '#ffffffb3',
          boxWidth: 15,
          boxHeight: 0,
        },
      },
      tooltip: {
        backgroundColor: '#e1beaa',
        displayColors: false,
        titleColor: '#525252',
        bodyColor: '#525252',
      },
    },
  };

  return (
    <div className="chart-container" style={styles.container}>
      <Line style={styles.chart} data={data} options={options} />
    </div>
  );
}

export default Chart;
