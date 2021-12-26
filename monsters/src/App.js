import {Component} from 'react';
import './App.css';
import { CardList } from './components/CardList/CardListComponent';
import { SearchBox } from './components/searchBox/SearchboxComponent';

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

  handleChange=(e)=>{   //arrow functions automaticaly allows to set this to setState
    this.setState({searchField:e.target.value})
  }


 render() { 
   const {monsters,searchField}=this.state;
   const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
   return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster' handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/>
     
    </div>
  );
 }
}

export default App;
