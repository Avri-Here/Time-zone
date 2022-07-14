import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.doubleSetIntervalTime = this.doubleSetIntervalTime.bind(this);
    this.resetSetIntervalTime = this.resetSetIntervalTime.bind(this);
    this.displayCurrentTime = this.displayCurrentTime.bind(this);
    this.state = {
      Time: new Date().toLocaleString("en-GB", {
        timeZone: this.props.Tinezone,
      }),
      SetInterval: 1000,
    };
    this.updateTime = setInterval(() => {
      this.setState({
        Time: new Date().toLocaleString("en-GB", {
          timeZone: this.props.Tinezone,
        }),
        SetInterval: this.state.SetInterval,
      });
    }, this.state.SetInterval);
  }
  componentDidUpdate() {
    if (this.props.StateDad.Interval === 1000) {
      setTimeout(() => {
        this.setState({
          ...this.state,
          SetInterval: 1000,
        });
      }, 5);
      console.log(this.props.StateDad.Interval);
    }
    if (this.props.StateDad.Double === 2) {
      setTimeout(() => {
        this.setState({
          SetInterval:
            this.state.SetInterval === 1000
              ? this.state.SetInterval
              : this.state.SetInterval * this.props.StateDad.Double,
        });
      }, 5);
    }
    if (this.props.StateDad.Random !== null) {
      let LocalRandom = this.props.StateDad.Random
      setTimeout(() => {
        this.setState({
          ...this.state,
          SetInterval: LocalRandom * 1000,
        });
      }, 5);
    }
    clearInterval(this.updateTime);
    this.updateTime = setInterval(() => {
      this.setState({
        ...this.state,
        Time: new Date().toLocaleString("en-GB", {
          timeZone: this.props.Tinezone,
        }),
      });
    }, this.state.SetInterval);
  }
  resetSetIntervalTime() {
    this.setState({
      ...this.state,
      SetInterval: 1000,
    });
  }

  doubleSetIntervalTime() {
    this.setState({
      ...this.state,
      SetInterval: this.state.SetInterval + 1000,
    });
  }

  displayCurrentTime() {
    this.setState({
      ...this.state,
      Time: new Date().toLocaleString("en-GB", {
        timeZone: this.props.Tinezone,
      }),
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ marginTop: 1 + "vw", marginBottom: 0 + "vw" }}>
          {this.state.Time}
        </h1>
        <h2 style={{ marginTop: 0 + "vw", marginBottom: 0 + "vw" }}>
          Render this component{" "}
          {this.state.SetInterval === 1000
            ? "1"
            : this.state.SetInterval / 1000}{" "}
          Seconds!
        </h2>
        <h2
          style={{
            marginTop: 0 + "vw",
            marginBottom: 0 + "vw",
            marginRight: 2 + "vw",
          }}
        >
          <button
            style={{ marginRight: 2 + "vw" }}
            onClick={() => {
              this.resetSetIntervalTime();
            }}
          >
            Reset setInterval time!
          </button>
          <button
            style={{ marginRight: 2 + "vw" }}
            onClick={this.doubleSetIntervalTime}
          >
            double setInterval time !
          </button>
          <button
            style={{ marginRight: 2 + "vw" }}
            onClick={this.displayCurrentTime}
          >
            Update me now !
          </button>
        </h2>
        <hr />
      </div>
    );
  }
  componentWillUnmount() {}
  componentDidMount() {}
}

export default Clock;
