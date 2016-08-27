
import { expect } from 'chai'
import starsReducer from './'
import {stateFromStore, fetchMock, configureStore} from '../../../helpers/TestHelper.tsx'

/** Module */
describe('Stars Module', () => {
  let store: Redux.Store
  /** Reducer */
  describe('Actions', () => {
    beforeEach(() => {
      store = configureStore({
        stars: {isFetching: false}
      })
    })
    it('will set fetching to true', () => {
      starsReducer.setFetching(true)
      expect(stateFromStore(store).stars.isFetching).to.be.eql(true)
    })

    it('will set fetching to false', () => {
      starsReducer.setFetching(false)
      expect(stateFromStore(store).stars.isFetching).to.be.eql(false)
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

      fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
        status: 200,
        body: githubResponse,
      })

      const promise = starsReducer.getStars(null)
      expect(stateFromStore(store).stars.isFetching).to.eql(true)

      promise.then(() => {
        expect(stateFromStore(store).stars.isFetching).to.eql(false)
        expect(stateFromStore(store).stars.count).to.eql(githubResponse.stargazers_count)
      })
        .then(done)
        .catch(done)
    })
    /** 400 */
    it('dispatches Failure on failed requests', (done) => {
      fetchMock.mock('https://api.github.com/repos/barbar/vortigern', {
        status: 400,
        body: errResponse,
      })
      const promise = starsReducer.getStars(null)
      expect(stateFromStore(store).stars.isFetching).to.eql(true)
      promise.then(() => {
        expect(stateFromStore(store).stars.isFetching).to.eql(false)
        expect(stateFromStore(store).stars.message).to.eql(errResponse.message)
        expect(stateFromStore(store).stars.error).to.eql(true)
      })
        .then(done)
        .catch(done)
    })
  })

  /** Mock Data */
  const githubResponse = {
    stargazers_count: 999,
  }

  const errResponse = {
    message: 'ERROR :-O',
  }
})
