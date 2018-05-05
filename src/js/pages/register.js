import m from "mithril";
import c from "classnames";

import registerFSM from "../modules/registerfsm";

import UsernameInput from "../components/register/usernameInput";
import PasswordInput from "../components/register/passwordInput";
import PersonalInput from "../components/register/personalInput";

export default class Register {

  fsm: registerFSM;

  usernameInput: UsernameInput;
  passwordInput: PasswordInput;
  personalInput: PersonalInput;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;
  }
  oninit = () => {
    this.usernameInput = new UsernameInput(this.fsm);
    this.passwordInput = new PasswordInput(this.fsm);
    this.personalInput = new PersonalInput(this.fsm);
  };

  view = () => {
    return [
      m('div.container', [
        m("h1.title.is-1", "Register Page"),
        m(
          "a.button.is-link",
          {
            oncreate: m.route.link,
            href: "/"
          },
          "Home"
        ),
        m('div.register', [
          m("h3.title.is-3", "New Register"),

          (this.fsm.state() === 'INPUT_USERNAME') ? 
          m(this.usernameInput)
          :
          null,

          (this.fsm.state() === 'INPUT_PASSWORD') ? 
          m(this.passwordInput)
          :
          null,

          (this.fsm.state() === 'INPUT_PERSONAL') ? 
          m(this.personalInput)
          :
          null,

          (this.fsm.state() === 'REGISTER_SUCCESS') ?
          m("h2.title.is-2", "Thank you for registering!")
          :
          null
        ])
      ])
    ];
  };
}
