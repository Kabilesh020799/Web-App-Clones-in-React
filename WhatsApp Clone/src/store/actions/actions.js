import * as actionTypes from './actioTypes'

export const addGname = (gname) => {
    return {
        type: actionTypes.SET_GNAME,
        gname: gname
    }
}