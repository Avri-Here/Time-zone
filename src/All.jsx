import React from "react";
import Clock from "./Clock";
class All extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = { Interval: null, Double: null, Random: null };
  }
  Reset() {
    this.setState({ ...this.state, Interval: 1000 });
  }
  DoubleAll() {
    this.setState({ ...this.state, Double: 2 });
  }
  Randomize() {
    this.setState({ ...this.state, Random: Math.floor(Math.random() * 10) });
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
            Fundad={this.setState}
          />
          <Clock
            Tinezone={"America/Argentina/Buenos_Aires"}
            StateDad={this.state}
            Fundad={this.setState}
          />
          <Clock
            Tinezone={"America/New_York"}
            StateDad={this.state}
            Fundad={this.setState}
          />
      </>
    );
  }
}

export default All;
