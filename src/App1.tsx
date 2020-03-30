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

class App1 extends React.Component<{}, IState> {
  constructor(props: IProps) {
    super(props);
    // 設定される
    this.state = {
      stateValue: "constructor",
      assignValue: "constructor",
      json: { assignValue: "constructor" },
      stateUpdate: false
    };

    // エラーは出ない、設定はされない
    this.setState({ stateValue: "setState" });

    // エラーが出る
    // Cannot assign to 'stateValue' because it is a read-only property.ts(2540)
    //this.state.stateValue = "assign";

    // エラーは出ない、設定はされる
    this.state.json.assignValue = "assign";

    // this bind
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ stateUpdate: true });
  }

  render() {
    return (
      <p>
        <h4>constructorでの値の設定</h4>
        <div>{this.state.stateValue}</div>
        <hr />
        <div>{this.state.assignValue}</div>
        <hr />
        <div className="red">{this.state.json.assignValue}</div>
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

export default App1;
