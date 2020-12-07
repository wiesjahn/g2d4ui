import React from 'react';
import Scoreboard  from "./components/Scoreboard";
import Orders from "./components/Orders/Orders";
import './App.css';


function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Orders />
    </div>
  );
}

export default App;
