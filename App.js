import React, { Component } from 'react';

import Player from './features/player';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Player />
        <p>
          Start editing tjfjyho see some magic happen :)
        </p>
      </div>
    );
  }
}

export default App;