import m from "mithril";
import c from "classnames";
import md5 from "js-md5";

import registerFSM from "../../modules/registerfsm";

export default class PaswordInput {

  fsm: registerFSM;

  password1: string;
  password2: string;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;
  }

  view = () => {
    return [
        m('div.field', [
            m('label.label', 'password'),
            m('div.control', [
                m('input.input', {
                    type: 'password', 
                    placeholder: 'Please enter password',
                    value: this.password1,
                    oninput: m.withAttr('value', (value) => {
                        this.password1 = value;
                    })
                })
            ]),

            m('label.label', 're-enter password'),
            m('div.control', [
                m('input.input', {
                    type: 'password', 
                    placeholder: 'Please enter password',
                    value: this.password2,
                    oninput: m.withAttr('value', (value) => {
                        this.password2 = value;
                    })
                })
            ]),
        ]),
        m('div.field.is-grouped', [
            m('div.control', [
                m('button.button.is-link', {
                    disabled: (this.password1 && this.password2 && this.password1 === this.password2) ? false : true,
                    onclick: () => {
                        this.fsm.movePersonalInfoInput(md5(this.password1));

                        this.password1 = '';
                        this.password2 = '';
                    }
                }, 'Next')
            ]),
            m('div.control', [
                m('button.button.is-text', {
                    onclick: () => {
                        this.fsm.resetInput();
                    }
                }, 'Cancel')
            ])
        ])
    ]
  };
}
