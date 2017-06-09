import {createStore} from 'redux';

//STEP 3 define reducers
const reducer = (state=[], action) => {
    switch(action.type) {
        case "POST_BOOK":
            let books = state.concat(action.payload);
            return books;
    }

    return state;
}

// STEP 1 create the store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log('Current state is: ', store.getState());
});

// STEP 2 create and dispatch actions
store.dispatch({
    type:"POST_BOOK",
    payload: 
    [{
        id: 1,
        title:'this is the book title',
        description: 'this is the book description',
        price: 33.33
    },    
    {
        id: 2,
        title:'this is the second book title',
        description: 'this is the second book description',
        price: 50
    }]            
});

// DISPATCH another book
store.dispatch({
    type:"POST_BOOK",
    payload: {
        id: 3,
        title:'this is the third book title',
        description: 'this is the third book description',
        price: 40
    }
});