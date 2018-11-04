// import PropTypes from 'prop-types';
import React from 'react';

interface CounterType {
  increment?: () => void;
  incrementIfOdd?: () => void;
  // incrementAsync: () => void;
  decrement?: () => void;
  counter?: number;
}

const Counter = ({
  increment,
  incrementIfOdd,
  // incrementAsync,
  decrement,
  counter
}: CounterType) => (
  <p>
    Clicked: {counter} times <button onClick={increment}>+</button>{' '}
    <button onClick={decrement}>-</button>{' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>{' '}
    {/* <button onClick={() => incrementAsync()}>Increment async</button> */}
  </p>
);

// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   decrement: PropTypes.func.isRequired,
//   increment: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired
// };

export default Counter;
