import {createStore} from 'redux';

//STEP 3 define reducers
const reducer = (state=0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
    }

    return state;
}

// STEP 1 create the store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
    console.log('current state is: ', store.getState());
});

// STEP 2 create and dispatch actions
store.dispatch({type:"INCREMENT", payload:1});
store.dispatch({type:"INCREMENT", payload:1});
store.dispatch({type:"DECREMENT"});
store.dispatch({type:"DECREMENT"});