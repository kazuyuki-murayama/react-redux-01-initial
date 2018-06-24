import { COUNT_UP, COUNT_DOWN } from '../actions/countActionCreators';

const initialState = { count : 0 };
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case COUNT_UP:
            return Object.assign({}, { count: state.count + 1 });
        case COUNT_DOWN:
            return Object.assign({}, { count: state.count - 1 });
        default:
            return state;
    }
}
