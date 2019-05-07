import React, { Component } from 'react';
import { render } from "react-dom";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Colors from './lib'
import Color from 'color';

const ResetCSS = createGlobalStyle `
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    color: rgb(68,68,68);
  }

  .container{
    min-height: 100vh;
  }

  .container .input-group {
    padding: 2em;
  }

`
const inputs = [
  'primary',
  'secondary',
  '_default',
  'primaryDark',
  'secondaryDark',
  'defaultDark',
  'primaryContrast',
  'secondaryContrast',
  'defaultContrast',
  'primaryContrastDark',
  'secondaryContrastDark',
  'defaultContrastDark'
]

class App extends Component {

  state = {
    backgroundColor: 'rgb(250,250,250)'
  }

  changeColor = (input) => {
    this.setState({
      backgroundColor: Colors[input.target.id]
    });
  }

  renderInputGroups = (inputs) => {
    console.log(this.state.backgroundColor);
    return (
      inputs.map((input, index) => {
        return (
          <div className='input-group' key={index} style={{marginBottom: '1em'}}>
            <div><label htmlFor={input} style={{color: Color(this.state.backgroundColor).negate().string()}}>{input.toUpperCase()}</label></div>
            <div>
              <input name='color' id={input} type='radio' onChange={this.changeColor}/>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <div className='container' style={{width: '100%', height: 'auto', transition: 'all .3s ease-in-out', backgroundColor}}>
        <ResetCSS/>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            this.renderInputGroups(inputs)
          }
        </div>
      </div>
    );
  }

}

render(<App />, document.getElementById("root"));
