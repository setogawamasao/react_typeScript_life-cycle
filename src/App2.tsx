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

class App2 extends React.Component<{}, IState> {
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
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    // 設定されない
    this.state = {
      stateValue: "DidMount",
      json: { assignValue: "DidMount" },
      assignValue: "DidMount",
      stateUpdate: false
    };

    // エラーは出ない、設定はされる
    this.setState({ stateValue: "setState" });

    // 以下のエラーが出る
    // Cannot assign to 'stateValue' because it is a read-only property.ts(2540)
    //this.state.stateValue = "a";

    // エラーは出ない、設定はされない
    this.state.json.assignValue = "assignValue";
  }

  updateState() {
    this.setState({ stateUpdate: true });
  }

  render() {
    return (
      <p>
        <h4>componentDidMountでの値の設定</h4>
        <div className="red">{this.state.stateValue}</div>
        <hr />
        <div>{this.state.assignValue}</div>
        <hr />
        <div>{this.state.json.assignValue}</div>
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

export default App2;
