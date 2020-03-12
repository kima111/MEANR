import loggedReducer from './isLoggedIn';
import usernameReducer  from './username';
import userInfo from './userInfo';
import {createStore, combineReducers} from 'redux';


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(error) {
        console.log(error);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch(error) {
        console.log(error);
        return undefined;
    }
}

const allReducers = combineReducers({
    isLogged: loggedReducer,
    username: usernameReducer,
    userInfo: userInfo,
});

const persistedState = loadFromLocalStorage();

const store = createStore(
    allReducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;