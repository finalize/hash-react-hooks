import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
