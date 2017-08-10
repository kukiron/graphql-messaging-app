import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ReactTestUtils from 'react-dom/test-utils';

import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App/>, div);
  const rendered = ReactTestUtils.renderIntoDocument(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const textHeader = <h4>Add messages to the field</h4>;
  if(rendered.textHeader)
    expect(typeof(rendered.textHeader)).toEqual('string');
});
