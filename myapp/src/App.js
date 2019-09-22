import React from 'react';
import Ninjas from './Ninjas';


function App() {
  return (
    <div className="App">
     <h1>My First React App</h1>
     <p>Welcome :)</p>
      <Ninjas name="Abraham" age="25" color="blue"/>
      <Ninjas name="Elais" age="28" color="Yellow" />
    </div>
  );
}

export default App;
