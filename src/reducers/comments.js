import { SAVE_COMMENT } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]; // take the exist state [...state] and add a new piece of state 
    default:
      return state;
  }
}