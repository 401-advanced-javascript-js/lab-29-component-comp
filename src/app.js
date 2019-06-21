import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header/header";
import Hello from "./components/hello/hello";
import Story from "./components/story/story";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Route exact path="/" component={Hello} />
          <Route exact path="/code" component={Story} />
        </div>
      </>
    );
  }
}
