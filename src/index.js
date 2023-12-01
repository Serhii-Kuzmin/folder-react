import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const element = React.createElement(
//   "a",
//   {
//     href: "/",
//     id: "link",
//   },
//   "Mi first link"
// );
// console.log(element);
// import App from './App.js';

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement(
//     "h1",
//     { id: "Title" },
//     React.createElement("span", {}, "Hello I am span")
//   )
// );

const elementJSX = (
  <div>
    <h1 id="Title">
      <span>hello i am span</span>
    </h1>
  </div>
);

const Header = () => {
  return (
    <header>
      <h1>Welcome</h1>
      <hr />
    </header>
  );
};
const MyComponent = () => {
  const title = "Hello REACT";
  return (
    <div>
      <Header />
      <h1>{title} Course</h1>
      <section>
        <p>Lorem Ipsum</p>
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<App />);
