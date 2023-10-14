const Headers = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world program using React",
);
const parent = React.createElement("div", { id: "parent" }, "kiler");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
