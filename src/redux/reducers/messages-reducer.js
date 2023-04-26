const TESTED = 'TESTED';

let initial_state = {
    messages: [
        {name: 'Ruslan', message_text: 'Heloo,  hi hi hi hi ho', type_of_message: 'self_message_container', time_of_sending: '12:45'},
        {name: 'Ksenya', message_text: 'Heloo! This is the tested message', type_of_message: 'outer_message_container', time_of_sending: '12:45'}
    ],
}

export const messages_reducer = (state = initial_state, action) => {
    switch(action.type){
        
        case  TESTED: {
            return state;
        }

        default:
            return state;
    }
}

export const testedAC = () => {
    return {
        type : TESTED
    };
}