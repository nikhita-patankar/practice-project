import React from 'react';
import logo from './logo.svg';
import Home from './homeComponent/homeComponent'

import './assets/css/template.css'
import './assets/css/bootstrap.min.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;