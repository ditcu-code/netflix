import React from 'react';
import {connect} from "react-redux";
import { countAdd, countMin } from '../store/actions/todoCount'

const getCounter = state => ({
    counter: state.counterReducer.counter
})

const CounterView = (props) => {
    return(
        <p>
            {props.counter}
            <button onClick={() => props.countAdd (1)}>+</button>
            <button onClick={() => props.countMin (1)}>-</button>
        </p>
    )
}

export default connect(getCounter, {countAdd, countMin})(CounterView);