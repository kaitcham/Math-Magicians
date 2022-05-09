import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialValues = {
    total: 0,
    next: null,
    operation: null,
  };
  const [values, setValues] = useState(initialValues);
  const handleClick = (e) => {
    setValues({ ...values, ...calculate(values, e.target.name) });
  };
  const { total, operation, next } = values;
  return (
    <div className="container">
      <p>
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </p>
      <div className="container-row">
        <button type="button" name="AC" onClick={handleClick}>
          AC
        </button>
        <button type="button" name="+/-" onClick={handleClick}>
          +/-
        </button>
        <button type="button" name="%" onClick={handleClick}>
          %
        </button>
        <button type="button" name="÷" onClick={handleClick}>
          ÷
        </button>
      </div>
      <div className="container-row">
        <button type="button" name="7" onClick={handleClick}>
          7
        </button>
        <button type="button" name="8" onClick={handleClick}>
          8
        </button>
        <button type="button" name="9" onClick={handleClick}>
          9
        </button>
        <button type="button" name="*" onClick={handleClick}>
          *
        </button>
      </div>
      <div className="container-row">
        <button type="button" name="4" onClick={handleClick}>
          4
        </button>
        <button type="button" name="5" onClick={handleClick}>
          5
        </button>
        <button type="button" name="6" onClick={handleClick}>
          6
        </button>
        <button type="button" name="-" onClick={handleClick}>
          -
        </button>
      </div>
      <div className="container-row">
        <button type="button" name="1" onClick={handleClick}>
          1
        </button>
        <button type="button" name="2" onClick={handleClick}>
          2
        </button>
        <button type="button" name="3" onClick={handleClick}>
          3
        </button>
        <button type="button" name="+" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="container-row">
        <button type="button" name="0" onClick={handleClick}>
          0
        </button>
        <button type="button" name="." onClick={handleClick}>
          .
        </button>
        <button type="button" name="=" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
