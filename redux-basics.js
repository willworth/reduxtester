//using node import syntax initially as we'll run it separately
const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
    counter: 0
};
//reducer
// using defaultvalue of es6. so if it's called with this val undefined, it'll take initialState instead
const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// store
const store = createStore(rootReducer);

// subscription normally setup straight after store creation
// subscription takes an arg, a func executed whenever the state is updated.
store.subscribe(() => {
    //any code we want on state updates.
    console.log("[subscription]", store.getState());
});

// action dispatcher
//we always need a type for later ID purposes.  convention is uppercase string
store.dispatch({ type: "INC_COUNTER" }); //doesn't need extra info
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
