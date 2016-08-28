
import { expect } from 'chai'
import <%= camelEntityName %>Reducer from './<%= camelEntityName %>'
import {stateFromStore, fetchMock, configureStore} from '../../../helpers/TestHelper.tsx'
import githubMock from '../../../mocks/githubData'
/** Module */
describe('<%= pascalEntityName %> Module', () => {
  let store: Redux.Store
  /** Reducer */
  describe('Actions', () => {
    beforeEach(() => {
      store = configureStore({
        <%= camelEntityName %>: {
          // Default State Here
        }
      })
    })
    it('will set example to true', () => {
      <%= camelEntityName %>Reducer.setRequestSuccessExample(true)
      expect(stateFromStore(store).<%= camelEntityName %>.example).to.be.eql(true)
    })

    it('will set example to false', () => {
      <%= camelEntityName %>Reducer.setRequestSuccessExample(false)
      expect(stateFromStore(store).<%= camelEntityName %>.example).to.be.eql(false)
    })
  })
  describe('Async Actions', () => {
    beforeEach(() => {
      store = configureStore({})
    })
    afterEach(() => {
      fetchMock.restore()
    })

    /** 200 */
    it('dispatches Request and Success Actions on OK requests', (done) => {

      fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.success)

      const promise = <%= camelEntityName %>Reducer.getStars(true)
      expect(stateFromStore(store).<%= camelEntityName %>.example).to.eql(true)
      promise.then(() => {
        expect(stateFromStore(store).<%= camelEntityName %>.example).to.eql(true)
      })
        .then(done)
        .catch(done)
    })
    /** 400 */
    it('dispatches Failure on failed requests', (done) => {
      fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.failure)
      const promise = <%= camelEntityName %>Reducer.getStars(true)
      expect(stateFromStore(store).<%= camelEntityName %>.example).to.eql(true)
      promise.then(() => {
        expect(stateFromStore(store).<%= camelEntityName %>.example).to.eql(false)
      })
        .then(done)
        .catch(done)
    })
  })
})
