import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

import { App } from './pages/App';
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App compiler="TypeScript" framework="React" />
    </Provider>,
    document.getElementById('app')

);