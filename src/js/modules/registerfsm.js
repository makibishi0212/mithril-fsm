// @flow

import FSM from "javascript-state-machine";

export default class registerFSM {
  // 登録画面に現れるステートを定義
  _stateMachine = new FSM({
    init: "INPUT_USERNAME",
    transitions: [
      {
        name: "movePasswordInput",
        from: "INPUT_USERNAME",
        to: "INPUT_PASSWORD"
      },
      {
        name: "movePersonalInfoInput",
        from: "INPUT_PASSWORD",
        to: "INPUT_PERSONAL"
      },
      {
        name: "moveSuccess",
        from: "INPUT_PERSONAL",
        to: "INPUT_SUCCESS"
      },
      {
        name: "resetInput",
        from: ["INPUT_PERSONAL", "INPUT_PASSWORD", "INPUT_USERNAME"],
        to: "INPUT_USERNAME"
      },
    ]
  });

  constructor() {

    console.log(this._stateMachine.state);
    /*
    this._stateMachine.melt();
    console.log(this._stateMachine.state);
    this.stateMachine.vaporize();
    console.log(this._stateMachine.state);
    */
  }

  switchPasswordInput = (username: string) => {
    this._stateMachine.movePasswordInput();
  }

  state = () => {
    return this._stateMachine.state;
  }
}
