import { DISPATCH_QUERY } from "../action";

const initialState = {
    query: '',
    results: []
}

export default function(state = initialState, action){
    switch(action.type){
        case DISPATCH_QUERY:{
            const {input} = action.payload;
            // Return a copy of current state
            return {
                ...state,
                query: input,
                // Fake data
                results: [{"title":"Random Title"},{"title":"Another Random Title"}]
            }
        }
        default:
            return state;
    }
}
