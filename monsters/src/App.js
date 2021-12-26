import {Component} from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
      monster:[
        {
          name:"Dracula"
        },{
          name:"Dinasour"
        },{
          name:"Zombie"
        }
      ]
    }
  }


 render() { 
   return (
    <div className="App">
     {this.state.monster.map(monster=> <h1>{monster.name}</h1>)}
    </div>
  );
 }
}

export default App;