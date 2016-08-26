import makeReducer from '../BaseReducer'

export interface ICounterState {
  count: number
}
export default makeReducer('counter', {count: 0}, {
  increment: (payload?: void, state?: ICounterState) => {
    return Object.assign({}, state, {
      count: state.count + 1
    })
  },
  decrement: (payload?: void, state?: ICounterState) => {
    return Object.assign({}, state, {
      count: state.count - 1
    })
  }
})
// export default class CounterReducer extends BaseReducer<ICounterState> {
//   protected ID = 'counter'
//   public defaultState: ICounterState = {
//     count: 0
//   }
//   constructor() {
//     super()
//   }
//   public increment (payload?: void, state?: ICounterState): ICounterState {
//     return Object.assign({}, state, {
//       count: state.count + 1
//     })
//   }
//   public decrement (payload?: void, state?: ICounterState): ICounterState {
//     return Object.assign({}, state, {
//       count: state.count + 1
//     })
//   }
// }
