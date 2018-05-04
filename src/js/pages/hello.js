import m from "mithril";
import c from "classnames";

export default class Hello {
  constructor() {
    
  }

  oninit = () => {
    console.log("hello world");
  };

  view = () => {
    return [
      m('div.container', [
        m("h1.title.is-1", "Hello Page"),
        m(
          "a.button.is-success",
          {
            oncreate: m.route.link,
            href: "/register"
          },
          "Register"
        )
      ])
    ];
  };
};
