import { CONSTANTS } from "../constants";
const {ACTION_TYPES} = CONSTANTS;

function reducer (state, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_MESSAGES_SUCCESS : {
            return { 
                ...state,
                messages: action.payload
            }
        }

        case ACTION_TYPES.GET_MESSAGES_ERROR : {
            return {
                ...state,
                error: action.error
            }
        }

        case ACTION_TYPES.ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }

        default: {
            return state;
        }
    }
}


export default reducer