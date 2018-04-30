import m from "mithril";
import c from "classnames";

import registerFSM from "../modules/registerfsm";

export default class Register {

  fsm: registerFSM;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;
  }
  oninit = () => {
    console.log("hello world");
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
          m('div.field', [
            m('label.label', 'username'),
            m('div.control', [
              m('input.input', {type: 'text', placeholder: 'Please input user name'})
            ])
          ]),
          m('div.field.is-grouped', [
            m('div.control', [
              m('button.button.is-link', 'Next')
            ]),
            m('div.control', [
              m('button.button.is-text', 'Cancel')
            ])
          ])
        ])
      ])
    ];
  };
}
