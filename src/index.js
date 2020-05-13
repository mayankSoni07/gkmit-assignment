import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/** Application store : Redux */
import store from './redux/store/store.js';
/** Main Container */
import { Home } from './containers';

/** Provider is used here to pass store's state in child components. */
ReactDOM.render(<Provider store={store}>
    <Home />
</Provider>, document.getElementById('root'));