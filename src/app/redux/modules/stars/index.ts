import makeReducer from '../BaseReducer'

/** Type Definitions */
export interface IStarsState {
  isFetching: boolean
  count: number
  error: boolean
  message: string,
  hasLoaded: boolean
}

/** Initial State */
const initialState: IStarsState = {
  count: -1,
  error: false,
  message: '',
  hasLoaded: false,
  isFetching: false,
}
const actions = {
  setFetching: (payload: boolean, state?: IStarsState): IStarsState => {
    return Object.assign({}, state, {
        isFetching: payload,
      })
  },
  setStars: (starCount: number, state?: IStarsState): IStarsState  => {
    return Object.assign({}, state, {
      isFetching: false,
      count: starCount,
    })
  },
  setStarsFailure: (error: Error, state?: IStarsState): IStarsState  => {
    return Object.assign({}, state, {
        isFetching: false,
        hasLoaded: true,
        message: error.message,
        error: true,
      })
  }
}

const asyncActions = {
  getStars: (payload?: void, dispatch?: Function) => {
      dispatch(actions.setFetching(true))
      return fetch('https://api.github.com/repos/barbar/vortigern')
        .then(res => {
          if (res.ok) {
            return res.json()
              .then(res => {
                return dispatch(actions.setStars(res.stargazers_count))
              })
          } else {
            return res.json()
              .then(res => {
                return dispatch(actions.setStarsFailure(res))
              })
          }
        })
        .catch(err => {
          return dispatch(actions.setStarsFailure(err))
        })
  }
}

export default makeReducer('stars', initialState, actions, asyncActions)
