import m from "mithril";
import c from "classnames";

import registerFSM from "../../modules/registerfsm";

export default class UsernameInput {

  fsm: registerFSM;
  username: string;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;
    this.username = '';
  }

  view = () => {
    return [
        m('div.field', [
            m('label.label', 'username'),
            m('div.control', [
                m('input.input', {
                    type: 'text', 
                    placeholder: 'Please input user name',
                    value: this.username,
                    oninput: m.withAttr('value', (value) => {
                        this.username = value;
                        console.log(this.username);
                    })
                }),

                (this.username) ?
                null
                :
                m('p', {class: c('help', 'is-danger')}, 'ユーザー名を入力して下さい！')
            ])
        ]),
        m('div.field.is-grouped', [
            m('div.control', [
                m('button.button.is-link', {
                    disabled: (this.username) ? false : true,
                    onclick: () => {
                        this.fsm.movePasswordInput(this.username)

                        this.username = '';
                    }
                }, 'Next')
            ])
        ])
    ]
  };
}
