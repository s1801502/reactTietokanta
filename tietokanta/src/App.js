import React, { useState } from 'react';
import Form from './components/Form';
import Menu from './components/Menu';

import './App.css';

const App = () => {
  const [ connected, setConnected ] = useState(false);
  const [ db, setDb ] = useState('');
  

  return (
    <div className="body">
      <h1 className="w3-text-black w3-animate-fading header">Database App</h1>
      {!connected ? <Form setConnected={setConnected} setDb={setDb} /> : <Menu setConnected={setConnected} db={db} setDb={setDb} />}
      
    </div>
  );

};

export default App;
