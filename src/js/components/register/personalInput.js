import m from "mithril";
import c from "classnames";

import BLOOD from "../../consts/bloodtype";
import SEX from '../../consts/sex';

import registerFSM from "../../modules/registerfsm";

export default class PersonalInput {

  fsm: registerFSM;

  sex: String;
  blood: String;
  age: number;

  constructor(registerFSM: registerFSM) {
    this.fsm = registerFSM;

    this.age = null;
    this.sex = SEX.MAN;
    this.blood = BLOOD.A;
  }

  view = () => {
    return [
        m('div.field', [
            m('label.label', 'sex'),
            m('div.control', [
                m('span', {class: c('select')}, [
                    m('select', {
                        onchange: m.withAttr('selectedIndex', 
                            (value) => {
                                switch(value) {
                                    case 0:
                                        this.sex = SEX.MAN;
                                        break;
                                    case 1:
                                        this.sex = SEX.WOMAN;        
                                        break;
                                }
                            }
                        )
                    }, [
                        m('option', 'Man'),
                        m('option', 'Woman'),
                    ])
                ]),
            ]),

            m('label.label', 'blood type'),
            m('div.control', [
                m('span', {class: c('select')}, [
                    m('select', {
                        onchange: m.withAttr('selectedIndex', 
                            (value) => {
                                switch(value) {
                                    case 0:
                                        this.blood = BLOOD.A;
                                        break;
                                    case 1:
                                        this.blood = BLOOD.B;       
                                        break;
                                    case 2:
                                        this.blood = BLOOD.O;       
                                        break;
                                    case 3:
                                        this.blood = BLOOD.AB;       
                                        break;
                                }
                            }
                        )
                    }, [
                        m('option', 'A'),
                        m('option', 'B'),
                        m('option', 'O'),
                        m('option', 'AB'),
                    ])
                ]),
            ]),

            m('label.label', 'age'),
            m('div.control', [
                m('input.input', {
                    type: 'text', 
                    placeholder: 'Please input user name',
                    value: this.age,
                    oninput: m.withAttr('value', (value) => {
                        this.age = value;
                    })
                }),
            ])
        ]),
        m('div.field.is-grouped', [
            m('div.control', [
                m('button.button.is-link', {
                    disabled: (this.age && !isNaN(this.age)) ? false : true,
                    onclick: () => {
                        this.fsm.moveSuccess(this.age, this.blood, this.sex)
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
