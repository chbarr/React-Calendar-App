import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './reducers/rootReducer';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
