import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { incrementCount, decrementCount, resetCount } from './actions';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <ButtonGroup isAttached>
        <Button
          bg="brand.primary"
          color="brand.textOnPrimary"
          onClick={() => dispatch(incrementCount())}>
          +
        </Button>
        <Button
          bg="brand.primary"
          color="brand.textOnPrimary"
          onClick={() => dispatch(decrementCount())}>
          -
        </Button>
        <Button
          bg="brand.primary"
          color="brand.textOnPrimary"
          onClick={() => dispatch(resetCount())}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
