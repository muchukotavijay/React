import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText: ''
  }

  printLengthHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const inputText = [...this.state.inputText.split('')];
    inputText.splice(index, 1);
    const resultText = inputText.join('');
    this.setState({
      inputText: resultText
    })

  }

  render() {
    const style = {
        inputStyle : {
            width: '60%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            boxShadow: '10px 10px 5px #888888'
        }
    }

    const charBlocks  = this.state.inputText.split('').map( (ch, index) => {
      return (
        <CharComponent
          key = {ch+index} 
          character = {ch}
          clicked = { () => { this.deleteCharHandler(index) }} />
        )
    });

    return (
      <div className="App">
        <input type='text' style={style.inputStyle} onChange = { (event) => this.printLengthHandler(event)} value={this.state.inputText}/>
        <p> {this.state.inputText} </p>
        <p> {this.state.inputText.length} </p>
        <ValidationComponent textLength= {this.state.inputText.length} />
        {charBlocks}
      </div>
    );
  }
}

export default App;
