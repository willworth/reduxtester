//using node import syntax initially as we'll run it separately
const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
    counter: 0
};
//reducer
// using defaultvalue of es6. so if it's called with this val undefined, it'll take initialState instead
const rootReducer = (state = initialState, action) => {
    return state;
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// action dispatcher

// subscription
