import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText: '',
    inputTextLength: 0
  }

  printLengthHandler = (event) => {
    const inputText = event.target.value;

    const inputTextLength = inputText.split('').length;
    
    this.setState({
      inputText: inputText,
      inputTextLength : inputTextLength
    })

  }

  deleteCharHandler = (index) => {
    const inputText = [...this.state.inputText.split('')];
    inputText.splice(index, 1);
    const resultText = inputText.join('');
    this.setState({
      inputText: resultText,
      inputTextLength: resultText.length
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

    let inputText = this.state.inputText;
    let blocks = '';

    blocks = (
      <div>
        { inputText.split('').map ( (character, index) => 
            <CharComponent 
              key = {character+index}
              character = {character}
              clicked = { () => { this.deleteCharHandler(index) }}
            />) }
      </div>
    );

    return (
      <div className="App">
        <input type='text' style={style.inputStyle} onChange = { (event) => this.printLengthHandler(event)} value={this.state.inputText}/>
        <p> {this.state.inputTextLength} </p>
        <ValidationComponent textLength= {this.state.inputTextLength} />
        {blocks}
      </div>
    );
  }
}

export default App;
