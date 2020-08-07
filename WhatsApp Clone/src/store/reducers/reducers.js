import * as actionTypes from './../actions/actioTypes'

const initialState = {
    gname: ''
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.SET_GNAME:
            return {...state,gname: action.gname};
        default:
            return state;
    }
}

export default reducer;