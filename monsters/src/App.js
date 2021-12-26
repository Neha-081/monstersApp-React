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


 render() { 
   const {monsters,searchField}=this.state;
   const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
   return (
    <div className="App">
      <SearchBox placeholder='Search Monster' handleChange={e=>this.setState({searchField:e.target.value})}/>
      <CardList monsters={filteredMonsters}/>
     
    </div>
  );
 }
}

export default App;
