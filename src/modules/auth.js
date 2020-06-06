import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = 'auth/LOGIN';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = 'auth/REGISTER';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value,
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const login = createAction(LOGIN, ({phone, password}) => ({
    phone, password
}));

export const register = createAction(REGISTER, ({phone, password, passwordConfirm, nickName}) => ({
    phone, password, passwordConfirm, nickName
}));

const initialState = {
    register: {
        phone: '',
        nickName: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        phone: '',
        password: '',
    },
}

const auth = handleActions({
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
            produce(state, draft => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
    }, initialState,
);

export default auth;