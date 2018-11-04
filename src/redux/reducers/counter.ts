import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER } from '../actions';

interface ActionType {
  type: string;
  payload: number;
}

const counter = (state: number = 0, action: ActionType): number => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
