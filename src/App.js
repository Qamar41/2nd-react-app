import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello.js';

function App() {
  return (

    
    <div className="App">
      <header className="App-header">
      <div >
    <h1 className='my'>Hello Qamar</h1>
    <p>Python Django Developer</p>
    <img src='https://avatars2.githubusercontent.com/u/52790165?s=460&u=e1099db810cf0118780fa9b50e498bd711a891a8&v=4'></img>
    </div>
      </header>

<Hello skills='Web Design , Web Development ' tools='Git , Linux , WordPress'  />

<hr/>

<Hello skills='Web Design , Web Development ' tools='Git , Linux , WordPress'  />

<hr/>
<Hello skills='Web Design , Web Development ' tools='Git , Linux , WordPress'  />
    </div>
    
  );
}

export default App;
