// /// <reference types="webpack/module" />
// import app from "./App";

import _ from "lodash";

// function component() {
//   const element = document.createElement("div");
//   element.innerHTML = _.join(["Hello", "Webpack"], " ");
//   return element;
// }

// document.body.appendChild(component());

// function add(x: number, y: number) {
//   return x + y + 1200;
// }

// const __DEV__ = import.meta.webpack;

// $("123");

// console.log(__DEV__);
// console.log(app);
// console.log(add(1, 2));

import { cube } from "./App";

function component() {
  const element = document.createElement("pre");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
