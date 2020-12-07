import React from 'react';
import Scoreboard  from "./components/Scoreboard";
import Orders from "./components/Orders/Orders";
import './App.css';


function App() {
  return (
    <table style={{ width: "100%" }}>
      <tr>
       <td>
        <Scoreboard />
      </td>
      <td>
        <Orders />
        </td>
      </tr>
    </table>
  );
}

export default App;
