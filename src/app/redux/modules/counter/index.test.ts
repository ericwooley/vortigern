import { expect } from 'chai'
import CounterReducer from './'
import BaseReducer from '../BaseReducer'
import { createStore, combineReducers } from 'redux'
/** Module */
describe('Counter Module', () => {
  let store
  /** Reducer */
  describe('Reducer', () => {
    let counterReducer: CounterReducer
    beforeEach(() => {
      counterReducer = new CounterReducer()
      console.log('counterReducer', counterReducer)
      store = createStore(combineReducers({
        counter: counterReducer.reducer
      }))
      BaseReducer.setStore(store)
    })
    it('handles action of type INCREMENT', () => {
      counterReducer.increment()
      expect(store.getState().counter.count).to.be.eql(1)
    })

    it('handles action of type DECREMENT', () => {
      counterReducer.decrement()
      expect(store.getState().counter.count).to.be.eql(1)
    })
  })
})
