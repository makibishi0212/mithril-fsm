import "../scss/style.scss";
import "bulma";
import add from "./modules/add";
import registerFSM from "./modules/registerfsm";
import m from "mithril";

import Hello from "./components/hello";
import About from "./components/about";
import Register from "./components/register";

const fsm = new registerFSM();

m.route(document.querySelector(".mithril-body"), "/", {
  "/": Hello,
  "/about": About,
  "/register": new Register(fsm)
});
