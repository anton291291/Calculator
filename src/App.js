import React, { Component } from 'react';
import './App.scss';


const button = [
  {
    id: "zero",
    value: 0
  },
  {
    id:"one",
    value: 1
  },
  {
    id: "two",
    value: 2
  },
  {
    id: "three",
    value:3
  },
  {
    id:"four",
    value:4
  },
  {
    id: "five",
    value: 5
  },
  {
    id: "six",
    value: 6
  },
  {
    id: "seven",
    value: 7
  },
  {
    id: "eight",
    value: 8
  },
  {
    id:"nine",
    value: 9
  },
  {
    id: "add",
    value: "+"
  },
  {
    id: "substract",
    value: "-"
  },
  {
    id: "multiply",
    value: "*"
  },
  {
    id: "devide",
    value: "/"
  },
  {
    id: "decimal",
    value: "."
  },
  {
    id: "clear",
    value: "AC"
  },
  {
    id: "equals",
    value: "="
  },
]


class Buttons extends React.Component {
  render () {
    return (
      <button
        id={this.props.id}
        className="buttons"
        onClick={this.props.onClick}
        value={this.props.value}
        >
        {this.props.value}
      </button>
    )
  }
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      number: [0],
      number2: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.add = this.add.bind(this)
    this.substruct = this.substract.bind(this)
    this.multiply = this.multiply.bind(this)
    this.devide = this.devide.bind(this)
    this.clear = this.clear.bind(this)
    this.decimal = this.decimal.bind(this)
    this.equals = this.equals.bind(this)
  }

    handleClick(e) {
      if (this.state.number.length === 1 && this.state.number == 0  ) {
        this.setState({
          number: [e.target.value],
          number2: [e.target.value]
        });
      if (this.state.number.length === 1 && this.state.number !== 0 && (e.target.value !== 0 ||e.target.value == "-" || e.target.value == "+" ||
        e.target.value == "/" ||e.target.value == "*" ||e.target.value == "="||e.target.value == "AC")  ) {
        this.setState({
          number: [e.target.value],
          number2: [e.target.value]
        });
      }
      else if
        (this.state.number.length > 1 && (e.target.value !== "-" || e.target.value !== "+" ||
        e.target.value !== "/" ||e.target.value !== "*" ||e.target.value !== "="
        ||e.target.value !== "."
        ||e.target.value !== "AC"))
        {
        this.setState({
          number: this.state.number.concat(e.target.value),
          number2: this.state.number2.concat(e.target.value)
        });
      }
      else if (this.state.number.length > 1 && (e.target.value == "-" || e.target.value == "+" ||
        e.target.value == "/" ||e.target.value == "*" ||e.target.value == "="))
       {
        this.setState({
          number: [e.target.value],
          number2: this.state.number2.concat(this.state.number)
        });
      }
      else {
        this.setState({
          number: this.state.number.concat(e.target.value),
          number2: this.state.number2.concat(this.state.number)
        });
      }
    }

    add() {

    }

    substract() {

    }

    multiply() {

    }

    devide() {

    }

    decimal() {

    }

    clear() {

    }

    equals() {

    }

  render() {
    const allButtons= button.map((i) => {
      return (
        <Buttons
          id={i.id}
          value={i.value}
          onClick={this.handleClick}
          />
      )
    })

    return (
      <div
        id="block_global">
        <div
          id="formula"
          >
          {this.state.number2}
        </div>
        <div
          id="display">
          {this.state.number}
        </div>
        <div
          id="block_buttons">
          {allButtons}
        </div>
      </div>
    );
  }
}

export default App;
