import m from "mithril";
import c from "classnames";

import registerFSM from "../../modules/registerfsm";

export default class PersonalInput {

  fsm: registerFSM;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;
  }

  view = () => {
    return [
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
    ]
  };
}
