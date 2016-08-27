import { expect } from 'chai'
import counterReducer from './'
import {configureStore} from '../../../helpers/TestHelper.tsx'
/** Module */
describe('Counter Module', () => {
  let store: Redux.Store
  /** Reducer */
  describe('Reducer', () => {
    beforeEach(() => {
      store = configureStore({
        counter: {
          count: 10
        }
      })
    })
    it('handles action of type INCREMENT', () => {
      counterReducer.increment()
      expect(store.getState().counter.count).to.be.eql(11)
    })

    it('handles action of type DECREMENT', () => {
      counterReducer.decrement()
      expect(store.getState().counter.count).to.be.eql(9)
    })
  })
})
