import { COUNT_UP, COUNT_DOWN } from '../actions/countActionCreators';

const initialState = { currentCount : 1 };

// 初期表示時、
// stateには、initialStateが設定されます。
// また、action.typeには、"@@redux/INITl.3.o.v.o.o"といったランダムな文字列が渡されます。
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case COUNT_UP :
            return Object.assign({}, { currentCount : state.currentCount + 1 });
        case COUNT_DOWN :
            return Object.assign({}, { currentCount : state.currentCount - 1 });
        default :
            return state;
    }
}
