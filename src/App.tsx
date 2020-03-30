import React from "react";
//import "./App.css";

interface IProps {
  pValue: string;
}

interface IState {
  stateValue: string;
  assignValue: string;
  json: { test: string };
}

class App extends React.Component<{}, IState> {
  constructor(props: IProps) {
    super(props);
    console.log("Constructor");
    // 設定される
    this.state = {
      stateValue: "constructor",
      json: { test: "constructor" },
      assignValue: "constructor"
    };

    // 設定されない
    this.setState({ stateValue: "test2" });

    // 以下のエラーが出る
    // Cannot assign to 'stateValue' because it is a read-only property.ts(2540)
    //this.state.stateValue = "a";

    // エラーは出ないし、設定される
    this.state.json.test = "aaa";

    // this bind
    this.testSetState = this.testSetState.bind(this);
    this.testAssignState = this.testAssignState.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    // 設定されない
    this.state = {
      stateValue: "DidMount",
      json: { test: "DidMount" },
      assignValue: "DidMount"
    };

    // 設定される
    this.setState({ stateValue: "test3" });

    // 以下のエラーが出る
    // Cannot assign to 'stateValue' because it is a read-only property.ts(2540)
    //this.state.stateValue = "a";

    // エラーは出ないが設定はされない
    this.state.json.test = "bbb";

    // 設定しようとするとエラーがが出る
    //this.state.assignValue = "updated by buttton click2"
  }

  testSetState() {
    // 設定されるし、renderは実行される
    this.setState({ stateValue: "updated by buttton click1" });
  }

  testAssignState() {
    // 設定しようとするとエラーがが出る
    //this.state.assignValue = "updated by buttton click2"

    // 設定されるが、renderは実行されない
    this.state.json.test = "updated by buttton click2";
  }

  render() {
    console.log("render");
    return (
      <p>
        <div>{this.state.stateValue}</div>

        <div>
          <input
            type="button"
            value="this.setState"
            onClick={this.testSetState}
          ></input>
        </div>
        <hr />
        <div>{this.state.json.test}</div>
        <div>
          <input
            type="button"
            value="Assign state "
            onClick={this.testAssignState}
          ></input>
        </div>
        <hr />
        <div>{this.state.assignValue}</div>
      </p>
    );
  }
}

export default App;
