import React from "react";
import { Polar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataPolar: {
      datasets: [
        {
          data: [80, 70, 75, 50, 45, 55, 50, 55, 72, 60],
          backgroundColor: [
            "rgba(3, 169, 244, 0.7",
            "rgba(255, 152, 0, 0.7)",
            "rgba(255, 235, 59, 0.7)",
            "rgba(76, 175, 80, 0.7)",
            "rgba(244, 67, 54, 0.7)",
            "rgba(156, 39, 176, 0.7)",
            "rgba(63, 81, 181, 0.7)",
            "rgba(63, 81, 181, 0.3)",
            "rgba(255, 235, 59, 0.1)",
            "rgba(156, 39, 176, 0.3)",
          ],
          label: "My dataset1" 
          // for legend
        }
      ],
      labels: ["React", "JavaScript", "Python", "Django", "Core Java", "SQL", " C++", "C", "HTML 5", "CSS 3"]
    }
  }

  render() {
    return (
      <MDBContainer className="text-light">
        <h3 className="mt-5">{"."}</h3>
        <Polar data={this.state.dataPolar} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;