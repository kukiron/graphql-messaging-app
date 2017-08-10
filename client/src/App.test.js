import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// script: {
//   "test": "react-scripts test --env=jsdom --coverage",
// }
