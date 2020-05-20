import React, { Component } from 'react';
import './index.css';
import Table from './Table.js'
import Header from './Header.js'
// import { render } from '@testing-library/react';


class App extends Component{
  state = {
    characters: [
      {
        Date: '18-05-2020',
        Task: 'Deploying my Site'
      },
      {
        Date: '18-05-2020',
        Task: 'Finishing an online course'
      },
      {
        Date: '18-05-2020',
        Task: 'Going to Church'
      },
      {
        Date: '18-05-2020',
        Task: 'Running 10km'
      },
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  render() {
    const { characters } = this.state
    return(
      <div className="container">
        <Header />
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}

export default App