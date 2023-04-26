import { combineReducers, legacy_createStore } from 'redux';
import { sidebar_reducer } from './reducers/sidebar-reducer'
import { messages_reducer } from './reducers/messages-reducer'; 
import { reg_reducer } from './reducers/reg_reducer';
import { auth_reducer } from './reducers/auth_reducer';


let reducers = combineReducers({
    sidebar_reducer,
    main_content : messages_reducer,
    registration_field : reg_reducer,
    auth_field : auth_reducer
});

export let store = legacy_createStore(reducers);

window.state = store.getState();