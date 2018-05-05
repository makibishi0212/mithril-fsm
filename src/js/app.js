import "../scss/style.scss";
import "bulma";
import add from "./modules/add";
import registerFSM from "./modules/registerfsm";
import m from "mithril";

import Hello from "./pages/hello";
import Register from "./pages/register";

const fsm = new registerFSM();

m.route(document.querySelector(".mithril-body"), "/register", {
  "/": new Hello(),
  "/register": new Register(fsm)
});
