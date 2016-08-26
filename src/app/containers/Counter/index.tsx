import * as React from 'react'
import {reducers, IState} from '../../redux/reducers.ts'
const { connect } = require('react-redux')
const s = require('./style.css')

interface IProps {
  count: number
}

@connect(
  (state: IState) => ({ count: state.counter.count })
)
class Counter extends React.Component<IProps, void> {

  public render() {
    const { count } = this.props

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
}

export { Counter }
