import { COUNT_UP, COUNT_DOWN } from '../actions/countActionCreators';

const initialState = { currentCount : 1 };
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case COUNT_UP:
            return Object.assign({}, { currentCount: state.currentCount + 1 });
        case COUNT_DOWN:
            return Object.assign({}, { currentCount: state.currentCount - 1 });
        default:
            // 初期表示時は、initialStateがstateに設定され、ここを通ります。
            return state;
    }
}
