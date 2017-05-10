import * as React from 'react';

import WorldComponent from './world';
import World from '../utils/world';

interface AppProps {
}

interface AppState {
  world: World;
  running: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {
      world: new World(100),
      running: false
    };
  }

  componentDidUpdate() {
    if (this.state.running) {
      requestAnimationFrame(() => this.setState({ world: this.state.world.nextGeneration() }));
    }
  }

  toggle() {
    this.setState({ running: !this.state.running });
  }

  render() {
    const citizens = this.state.world.citizens;
    const buttonText = this.state.running ? 'stop' : 'start';

    return <div className="reactor-of-life">
      <h1 className="title">Conway's Reactor of Life - <a href="https://github.com/trentmwillis/reactor-of-life">GitHub</a></h1>

      <WorldComponent citizens={citizens} />

      <button onClick={() => this.toggle()}>{buttonText}</button>
    </div>;
  }
}

