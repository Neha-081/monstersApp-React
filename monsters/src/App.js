import {Component} from 'react';
import './App.css';
import { CardList } from './components/CardList/CardListComponent';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }


 render() { 
   return (
    <div className="App">
      <input type='search' placeholder='Search Monster' onChange={e=>this.setState({searchField:e.target.value},()=>{     //second arguement is a function call to make state syncronus,as setState is asynchronus and gives a empty value in search value at first time
        console.log(this.state);
      })}/>
      <CardList monsters={this.state.monsters}/>
     
    </div>
  );
 }
}

export default App;
