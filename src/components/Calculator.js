import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <p>0</p>
        <div className="container-row">
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button type="submit">+</button>
        </div>
        <div className="container-row">
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit">-</button>
        </div>
        <div className="container-row">
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button type="submit">*</button>
        </div>
        <div className="container-row">
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit">/</button>
        </div>
        <div className="container-row">
          <button type="submit">0</button>
          <button type="submit">.</button>
          <button type="submit">=</button>
        </div>
      </div>
    );
  }
}
