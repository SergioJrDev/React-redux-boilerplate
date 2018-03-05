import Store from './DefaultStore';
const { welcome } = Store;

const SET_WELCOME = 'SET_WELCOME';

export default function reducer(state = welcome, action) {
    const { type, payload } = action;
    switch (type) {
    case SET_WELCOME:
        return { ...state, ...payload };
        break;
    default:
        return state;
        break;
    }
}

export function setWelcome(payload) {
    return {
        type: SET_WELCOME,
        payload
    };
}