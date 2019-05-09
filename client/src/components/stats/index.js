import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export function Stats(props) {
  console.log(props.data);
  let cardData = {
    dataBar: {
      labels: [
        "Turn 1",
        "Turn 2",
        "Turn 3",
        "Turn 4",
        "Turn 5",
        "Turn 6",
        "Turn 7",
        "Turn 8",
        "Turn 9",
        "Turn 10"
      ],
      datasets: [
        {
          label: "Probability of a Viable Play per Turn for this Deck",
          data: props.data.split(","),
          backgroundColor: "rgba(245, 74, 85, 1)",
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
              color: "rgba(0, 0, 0, 1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(250, 250, 250, 1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };
  console.log(cardData)
  return (
    <MDBContainer>
      <h3 className="mt-5">Probability of Plays on Each Turn</h3>
      <Bar data={cardData.dataBar} options={cardData.barChartOptions} />
    </MDBContainer>
  );
}

export default Stats;
