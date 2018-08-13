import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers/reducer';
import CountContainer from './containers/container';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={ store }>
        <CountContainer />
    </Provider>,
    document.getElementById('root')
);