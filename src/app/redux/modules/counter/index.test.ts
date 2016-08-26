import { expect } from 'chai'
import counterReducer from './'
import {setStore} from '../BaseReducer'
import { createStore, combineReducers } from 'redux'
/** Module */
describe('Counter Module', () => {
  let store
  /** Reducer */
  describe('Reducer', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        counter: counterReducer.reducer
      }))
      setStore(store)
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
