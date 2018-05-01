// @flow

import FSM from "javascript-state-machine";
import BLOOD from "../consts/bloodtype";
import SEX from '../consts/sex';

export default class registerFSM {
  // 登録画面に現れるステートを定義
  _stateMachine = new FSM({
    init: "INPUT_USERNAME",
    transitions: [
      {
        // +username
        name: "movePasswordInput",
        from: "INPUT_USERNAME",
        to: "INPUT_PASSWORD"
      },
      {
        // +password
        name: "movePersonalInfoInput",
        from: "INPUT_PASSWORD",
        to: "INPUT_PERSONAL"
      },
      {
        // +bloodtype +age +sex
        name: "moveSuccess",
        from: "INPUT_PERSONAL",
        to: "INPUT_SUCCESS"
      },
      {
        // -all
        name: "resetInput",
        from: ["INPUT_PERSONAL", "INPUT_PASSWORD", "INPUT_USERNAME"],
        to: "INPUT_USERNAME"
      },
    ]
  });

  // アプリが持つプロパティを定義
  username = null;
  password = null;
  bloodtype = null;
  age = null;
  sex = null;

  constructor() {

    console.log(this._stateMachine.state);
    /*
    this._stateMachine.melt();
    console.log(this._stateMachine.state);
    this.stateMachine.vaporize();
    console.log(this._stateMachine.state);
    */
  }

  // ステートの遷移時に前のステートから値を受け取る
  movePasswordInput = (username: string) => {
    this._stateMachine.movePasswordInput();
    this.username = username;
  }

  movePersonalInfoInput = (password: string) => {
    this._stateMachine.movePersonalInfoInput();
    this.password = password;
  }

  moveSuccess = (bloodtype: string, age: number, sex: number) => {
    
  }

  state = () => {
    return this._stateMachine.state;
  }
}
