import React from "react";
//import "./App.css";

interface IProps {
  pValue: string;
}

interface IState {
  stateValue: string;
  assignValue: string;
  json: { assignValue: string };
  stateUpdate: boolean;
}

class App3 extends React.Component<{}, IState> {
  constructor(props: IProps) {
    super(props);
    // 設定される
    this.state = {
      stateValue: "constructor",
      assignValue: "constructor",
      json: { assignValue: "constructor" },
      stateUpdate: false
    };

    // this bind
    this.testSetState = this.testSetState.bind(this);
    this.testAssignState = this.testAssignState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  testSetState() {
    // 設定されるし、renderは実行される
    this.setState({ stateValue: "updated by buttton click1" });
  }

  testAssignState() {
    // 設定しようとするとエラーがが出る
    //this.state.assignValue = "updated by buttton click2"

    // 設定されるが、renderは実行されない
    this.state.json.assignValue = "updated by buttton click2";
  }

  updateState() {
    this.setState({ stateUpdate: true });
  }

  render() {
    return (
      <p>
        <h4>onClickでの値の設定</h4>
        <div>{this.state.stateValue}</div>
        <div>
          <input
            type="button"
            value="this.setState"
            onClick={this.testSetState}
          ></input>
        </div>
        <hr />
        <div>{this.state.assignValue}</div>
        <hr />
        <div className="red">{this.state.json.assignValue}</div>
        <div>
          <input
            type="button"
            value="assign state"
            onClick={this.testAssignState}
          ></input>
        </div>
        <hr />
        <div>
          <input
            type="button"
            value="update state"
            onClick={this.updateState}
          ></input>
        </div>
      </p>
    );
  }
}

export default App3;
