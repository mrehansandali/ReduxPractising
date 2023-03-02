import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './action'

function Card() {
    const myState = useSelector((state)=>state.changeTheNum)
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <h1>Increment/Decrement</h1>
            <h4>React Redux</h4>
            <div className="quantity">
                <button className="minus" onClick={ () => dispatch(incNum(5)) }>+</button>
                <input type="text" className='value' value={myState} />
                <button className="plus" onClick={ () => dispatch(decNum()) }>-</button>
            </div>


        </div>
    )
}

export default Card