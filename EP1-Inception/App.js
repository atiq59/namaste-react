// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from React"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am an h1"),
    React.createElement("h2", { key: "h2" }, "I am an h2"),
  ]),
  React.createElement("div", { id: "chilSibling" }, [
    React.createElement("h1", { key: "1sib" }, "I am an h1 sib"),
    React.createElement("h2", { key: "2sib" }, "I am an h2 sib"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
