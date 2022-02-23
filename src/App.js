import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // the following code can be achieved by using the arrow function
    // this.handleChange = this.handleChange.bind(this); 
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search monsters' 
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonster}/>    
      </div>
    );
  }
}
export default App;
