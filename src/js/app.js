import "../scss/style.scss";
import "bulma";
import registerFSM from "./modules/registerfsm";
import m from "mithril";

import Register from "./pages/register";

const fsm = new registerFSM();

m.route(document.querySelector(".mithril-body"), "/register", {
  "/register": new Register(fsm)
});
