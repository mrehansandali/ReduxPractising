import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './action'

function Navbar() {
    const myState = useSelector((state) => state.changeTheNum)
    const dispatch = useDispatch()
    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <div className="quantity">
                                <button className="minus" onClick={() => dispatch(incNum(50))}>+</button>
                                <input type="text" className='value' value={myState} />
                                <button className="plus" onClick={() => dispatch(decNum())}>-</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar