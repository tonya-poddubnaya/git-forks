import {FETCH_REPOSITORY, LOADING} from "../actions/types";
import {STATE_LOADING} from "../actions/stateTypes";

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_REPOSITORY:
            return action.payload || false;
        case LOADING:
            return STATE_LOADING;
        default:
            return state;
    }
};