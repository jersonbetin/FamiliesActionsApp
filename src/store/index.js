import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if(process.env.NODE_ENV === 'development'){
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if(typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const configureStore = () => {

    const store = createStore(
        connectRouter(history)(rootReducer(history)),
        initialState,
        composeEnhancers
    );

    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            module.hot.accept('../modules', () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

}


export default configureStore;