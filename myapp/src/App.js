import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      { name: 'Abraham', age: 20, color: 'blue', id: 1 },
      { name: 'Milkias', age: 26, color: 'gray', id: 2 },
      { name: 'David', age: 35, color: 'red', id: 3 }
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
