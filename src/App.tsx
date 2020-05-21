import React from 'react';
import NewsContainers from './containers/NewsContainer';
import { Route } from 'react-router-dom';

function App() {
  return <Route path="/:category?" component={NewsContainers} />;
}

export default App;
