import React from "react";
import Clock from "./Clock";
class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Interval: null, Double: null, Random: null };
  }
  Reset() {
    this.setState({ ...this.state, Interval: 1000 });
    setTimeout(() => {
      this.setState({ ...this.state, Interval: null });
    }, 1);
  }
  DoubleAll() {
    this.setState({ ...this.state, Double: 2 });
    setTimeout(() => {
      this.setState({ ...this.state, Double: null });
    }, 5);
  }
  Randomize() {
    this.setState({ ...this.state, Random: Math.floor(Math.random() * 10) });
    setTimeout(() => {
      this.setState({ ...this.state, Random: null });
    }, 5);
  }
  render() {
    return (
      <>
      <h1 style={{ marginBottom: 0 + "vw" }}>Full control here!</h1>
        <h1 style={{ marginTop: 1.5 + "vw" }}>
          <button
            onClick={() => {
              this.Reset();
            }}
            style={{ marginRight: 2 + "vw" }}
          >
            Reset all setIntervals time !
          </button>
          <button
            style={{ marginRight: 2 + "vw" }}
            onClick={() => {
              this.DoubleAll();
            }}
          >
            Double all setIntervals time !
          </button>
          <button
            style={{ marginRight: 2 + "vw" }}
            onClick={() => {
              this.Randomize();
            }}
          >
            Randomize setInterval time !
          </button>
        </h1>
        <hr />
          <Clock
            Tinezone={"Asia/Jerusalem"}
            StateDad={this.state}
          />
          <Clock
            Tinezone={"America/Argentina/Buenos_Aires"}
            StateDad={this.state}
          />
          <Clock
            Tinezone={"America/New_York"}
            StateDad={this.state}
          />
      </>
    );
  }
}

export default All;
