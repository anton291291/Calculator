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

  }

    handleClick(e) {

      if (this.state.number2.length == 0
        && this.state.number == 0
        && (e.target.value !== "0"
          && e.target.value !== "-"
          && e.target.value !== "+"
          && e.target.value !== "/"
          && e.target.value !== "*"
          && e.target.value !== "="
          && e.target.value !== "."
          && e.target.value !== "AC")
        )
       {
        this.setState({
          number: [e.target.value],
          number2: [e.target.value]
        });
      }

      else if (this.state.number == 0 && e.target.value == "0") {
        this.setState({
          number: this.state.number,
          number2: this.state.number2
        });
      }

      else if (this.state.number[1] == 0
        && e.target.value == "0") {
        this.setState({
          number: this.state.number,
          number2: this.state.number2
        });
      }

      else if (this.state.number[1] == 0 && this.state.number.length < 3 &&
        (e.target.value !== "-"
          && e.target.value !== "+"
          && e.target.value !== "0"
          && e.target.value !== "/"
          && e.target.value !== "*"
          && e.target.value !== "="
          && e.target.value !== "."
          && e.target.value !== "AC")
        ) {
        this.setState({
          number: this.state.number,
          number2: this.state.number2
        });
      }

      else if (e.target.value == "AC") {
        this.setState({
          number: [0],
          number2: []
        });
      }

      //Order is very important

      else if ((this.state.number2.includes("=") && (e.target.value == "+"
        || e.target.value == "-"
        || e.target.value == "/"
        || e.target.value == "*")))
       {
       this.setState({
          number2: this.state.number.concat(e.target.value),
          number: [e.target.value]
        });
      }

      else if (this.state.number2.includes("=")
        && e.target.value == "=") {
        this.setState({
          number: this.state.number,
          number2: this.state.number2
        });
      }

      else if (this.state.number2.length > 1 && e.target.value == "."
        && this.state.number2.includes("=")
        )
        {
        this.setState({
          number: [0,"."],
          number2: [0,"."]
        });

      }
      else if (this.state.number2.includes("="))
       {
        this.setState({
          number2: [e.target.value],
          number: [e.target.value]
        });
      }

      else if ((this.state.number2.length == 1
        &&  (e.target.value !== 0
          && e.target.value !== "-"
          && e.target.value !== "+"
          && e.target.value !== "/"
          && e.target.value !== "*"
          && e.target.value !== "="
          && e.target.value !== "."
          && e.target.value !== "AC")
        ))
       {
        this.setState({
          number: this.state.number.concat(e.target.value),
          number2: this.state.number2.concat(e.target.value)
        });
      }
      else if (this.state.number2.length >= 1
        && (e.target.value == "-"
          || e.target.value == "+"
          || e.target.value == "/"
          || e.target.value == "*")
          && (this.state.number2[this.state.number2.length -1] !== e.target.value)
        )
        {
        this.setState({
          number: [e.target.value] ,
          number2: this.state.number2.concat(e.target.value)
        });
      }
      else if (this.state.number2.length == 0
        && e.target.value == ".")
      {
      this.setState({
        number: this.state.number.concat(e.target.value),
        number2: this.state.number.concat(e.target.value)
      });
      }

      else if (this.state.number2.length >= 1 && e.target.value == "."
        && !this.state.number.includes(".")
        ) {
        this.setState({
          number: this.state.number.concat(e.target.value),
          number2: this.state.number2.concat(e.target.value)
        });
      }

      else if
        (this.state.number2.length > 1
          && (e.target.value !== "-"
            && e.target.value !== "+"
            && e.target.value !== "/"
            && e.target.value !== "*"
            && e.target.value !== "="
            && e.target.value !== "."
            && e.target.value !== "AC"
          )
        )
        {
        this.setState({
          number: this.state.number.concat(e.target.value),
          number2: this.state.number2.concat(e.target.value)
        });
      }

      else if (this.state.number.length > 1 && e.target.value == "=")
       {
        const equal = eval(this.state.number2.join(""))
        this.setState({
          number: equal.toString().split(""),
          number2: this.state.number2.concat("=",equal.toString().split(""))
        });
      }
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
