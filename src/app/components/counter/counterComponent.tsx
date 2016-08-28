import * as React from 'react'

// This is often useful, delete if you don't need it
// import { Link } from 'react-router'
import { reducers } from '../../redux/reducers.ts'
export interface ICounterProps {
  count: number
}

export default function Counter (props: ICounterProps) {
  const {count} = props
  const s = require('./counterComponent.css')
  return (
    <div className={s.counter}>
      <h4>Counter Example</h4>
      <button
        name="incBtn"
        onClick={reducers.counterReducer.increment}>
        INCREMENT
      </button>
      <button
        name="decBtn"
        onClick={reducers.counterReducer.decrement}
        disabled={count <= 0}>
        DECREMENT
      </button>
      <p>{count}</p>
    </div>
  )
}

export {Counter }
