require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./components/app.js");

const appContainer = document.getElementById("app");
ReactDOM.render(React.createElement(App), appContainer);
