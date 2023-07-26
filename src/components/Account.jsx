import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementFun,decrementFun,incrementByAmountFun,getUserAccount } from '../actions';
const Account = () => {
    const [value, setValue] = useState(0);
    const amount= useSelector(state=>state.account.amount);
    const points= useSelector(state=>state.bonus.points);
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <div className="container">
                <h4>
                    <b>Account Component</b>
                </h4>
                <h3>Amount : {amount}</h3>
                <h3>Total Point : {points}</h3>
                <button onClick={()=>dispatch(incrementFun())}>Increment +</button>
                <button onClick={()=>dispatch(decrementFun())}>Decrement -</button>
                <input type="text" onChange={(e) => setValue(+e.target.value)} />
                <button onClick={() =>dispatch(incrementByAmountFun(value)) }>Increment By {value} +</button>
                <button onClick={() =>dispatch(getUserAccount(1)) }>Init Account</button>
            </div>
        </div>
    )
}

export default Account;