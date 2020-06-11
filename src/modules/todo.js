import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const LIST_TODO = 'todo/LIST_TODO';

export const listTodo = createAction(
    LIST_TODO,
    ({phone, type}) => ({phone, type})
);
