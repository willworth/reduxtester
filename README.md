# redux

https://redux.js.org/introduction/core-concepts
https://redux.js.org/basics/actions/
https://redux.js.org/basics/reducers/
https://redux.js.org/faq

you'll only have one reducer, even if there are many- they are combined into one final reducer.

The redux-basics.js file contains the core ideas, but when you want to integrate with react:

norm is to create the store in index.js - so before the main app is initialised.

import { createStore } from 'redux';

const store = createStore( ) // this takes a reducer, but best practice is for this to go in a store dir.

reducer is created in separate file and then imported to index.js
