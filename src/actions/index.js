import axios from "axios";
// create constant of action name
// const init = "account/init";
export const inc = "account/increment";
export const dec ="account/decrement";
export const incByAmt ="account/incrementByAmount";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulFilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";
export const incBonus = "bonus/increment";


//action creator
export function getUserAccount(id){
    return async(dispatch,getState) => {
        try {
            dispatch(getAccountUserPending())
            const {data} = await axios.get(`http://localhost:3000/account/${id}`);
            dispatch(getAccountUserFulFilled(data.amount))
        } catch (error) {
            dispatch(getAccountUserRejected(error.message));
        }
    }
}


export function getAccountUserFulFilled(value) {
   return {type:getAccUserFulFilled, payload:value}
}

export function getAccountUserRejected(error) {
    return {type:getAccUserRejected, error:error}
 }

export function getAccountUserPending() {
    return {type:getAccUserPending }
 }

export function incrementFun() {
    return {type:inc}
}

export function decrementFun() {
    return {type:dec}
}

export function incrementByAmountFun(value) {
    return {type:incByAmt, payload:value}
}

export function incrementBonus() {
    return {type:incBonus}
}
