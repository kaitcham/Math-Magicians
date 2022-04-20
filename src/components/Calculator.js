import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <p>
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <div className="container-row">
          <button
            type="button"
            name="AC"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            AC
          </button>
          <button
            type="button"
            name="+/-"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            +/-
          </button>
          <button
            type="button"
            name="%"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            %
          </button>
          <button
            type="button"
            name="÷"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            ÷
          </button>
        </div>
        <div className="container-row">
          <button
            type="button"
            name="7"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            7
          </button>
          <button
            type="button"
            name="8"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            8
          </button>
          <button
            type="button"
            name="9"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            9
          </button>
          <button
            type="button"
            name="*"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            *
          </button>
        </div>
        <div className="container-row">
          <button
            type="button"
            name="4"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            4
          </button>
          <button
            type="button"
            name="5"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            5
          </button>
          <button
            type="button"
            name="6"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            6
          </button>
          <button
            type="button"
            name="-"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            -
          </button>
        </div>
        <div className="container-row">
          <button
            type="button"
            name="1"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            1
          </button>
          <button
            type="button"
            name="2"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            2
          </button>
          <button
            type="button"
            name="3"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            3
          </button>
          <button
            type="button"
            name="+"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            +
          </button>
        </div>
        <div className="container-row">
          <button
            type="button"
            name="0"
            onClick={(e) => this.handleClick(e.target.name)}
          >
            0
          </button>
          <button
            type="button"
            name="."
            onClick={(e) => this.handleClick(e.target.name)}
          >
            .
          </button>
          <button
            type="button"
            name="="
            onClick={(e) => this.handleClick(e.target.name)}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
