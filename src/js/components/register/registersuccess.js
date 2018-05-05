import m from "mithril";
import c from "classnames";

import registerFSM from "../../modules/registerfsm";

export default class RegisterSuccess {

  fsm: registerFSM;
  username: string;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;
    this.username = '';
  }

  view = () => {
    return [
        m("h3.title.is-3", "Thank you for registering!"),
        m("div.content", [
            m('h4', 'Username'),
            m('p', this.fsm.username),
            m('h4', 'Age'),
            m('p', this.fsm.age),
            m('h4', 'Sex'),
            m('p', this.fsm.sex),
            m('h4', 'Blood type'),
            m('p', this.fsm.bloodtype),
        ])
    ]
  };
}
