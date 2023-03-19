import React, {useState} from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout/Layout';

function App() {
  const [name, setName] = useState('React');
  
  console.log(name)
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
