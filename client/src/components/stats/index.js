import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: [
        "Turn 1",
        "Turn 2",
        "Turn 3",
        "Turn 4",
        "Turn 5",
        "Turn 6",
        "Turn 7"
      ],
      datasets: [
        {
          label: "#1",
          data: [12, 39, 3, 50, 2, 32, 84],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
        {
          label: "#2",
          data: [56, 24, 5, 16, 45, 24, 8],
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1
        },
        {
          label: "#3",
          data: [12, 25, 54, 3, 15, 44, 3],
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderWidth: 1
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Radar chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
