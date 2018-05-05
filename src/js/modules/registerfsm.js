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
        to: "REGISTER_SUCCESS"
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
  username:string = null;
  password:string = null;
  bloodtype: Symbol = null;
  age: number = null;
  sex: Symbol = null;

  constructor() {

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

  moveSuccess = (age: number, bloodtype: Symbol, sex: Symbol) => {
    this._stateMachine.moveSuccess();

    this.bloodtype = bloodtype;
    this.age = age;
    this.sex = sex;
  }

  resetInput = () => {
    this._stateMachine.resetInput();

    this.username = null;
    this.password = null;
    this.bloodtype = null;
    this.age = null;
    this.sex = null;
  }

  state = () => {
    return this._stateMachine.state;
  }
}
