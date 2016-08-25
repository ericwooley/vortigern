import BaseReducer from '../BaseReducer'

export interface ICounterState {
  count: number
}
export default class CounterReducer extends BaseReducer<ICounterState> {
  protected ID = 'counter'
  protected defaultState: ICounterState = {
    count: 0
  }
  public increment (payload?: void, state?: ICounterState): ICounterState {
    return Object.assign({}, state, {
      count: state.count + 1
    })
  }
  public decrement (payload?: void, state?: ICounterState): ICounterState {
    return Object.assign({}, state, {
      count: state.count + 1
    })
  }
}
