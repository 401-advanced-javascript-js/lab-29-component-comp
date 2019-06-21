import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header';
import Hello from './components/hello/hello';
import ClassStory from './components/story/class-story';
import FunctionalStory from './components/story/functional-story';

class Code extends React.Component {
  render() {
    return (
      <>
        <ClassStory />
        <FunctionalStory />
      </>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Route exact path="/" component={Hello} />
          <Route exact path="/code" component={Code} />
        </div>
      </>
    );
  }
}
