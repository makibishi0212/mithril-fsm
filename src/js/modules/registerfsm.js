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
  _username: string = null;
  _password: string = null;
  _bloodtype: string = null;
  _age: number = null;
  _sex: string = null;

  constructor() {

  }

  // ステートの遷移時に前のステートから値を受け取る
  movePasswordInput = (username: string) => {
    this._stateMachine.movePasswordInput();

    this._username = username;
  }

  movePersonalInfoInput = (password: string) => {
    this._stateMachine.movePersonalInfoInput();

    this._password = password;
  }

  moveSuccess = (age: number, bloodtype: Symbol, sex: Symbol) => {
    this._stateMachine.moveSuccess();

    this._bloodtype = bloodtype;
    this._age = age;
    this._sex = sex;
  }

  resetInput = () => {
    this._stateMachine.resetInput();

    this._username = null;
    this._password = null;
    this._bloodtype = null;
    this._age = null;
    this._sex = null;
  }

  state = () => {
    return this._stateMachine.state;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get bloodtype() {
    return this._bloodtype;
  }

  get age() {
    return this._age;
  }

  get sex() {
    return this._sex;
  }
}
