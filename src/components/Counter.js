import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,incrementByValue} from '../store/action';

function Counter() {
  //const [counter, setCounter]=useState(0);
  const [value, setValue]=useState(0);
  const dispatch=useDispatch();//send to reducer
  //store will provide counter value
  const counter=useSelector((state)=>{
    return state.counter
  });
  return (
    <div>
      <div>Counter: {counter} </div>
      <div>
        <button onClick={()=>{
          //setCounter(counter+1);
          //dispatch({type:"INCREMENT"});
          dispatch(increment());
        }}>Increment</button>
      </div>
      <div>
        <button onClick={()=>{
          //setCounter(counter-1);
          //dispatch({type:"DECREMENT"});
          dispatch(decrement());
        }}>Decrement</button>
      </div>
      <div>
        <input type="text" onChange={(e)=>{
          setValue(e.target.value);
        }}/>
        <br/>
        <button onClick={()=>{
          //setCounter(counter+Number(value));
          //dispatch({type: "INCREMENT_BY_AMOUNT",payload:Number(value)})
          dispatch(incrementByValue(Number(value)));
        }}>Increment By Value</button>
      </div>
    </div>
  );
}

export default Counter;
