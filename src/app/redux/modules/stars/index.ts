import makeReducer from '../BaseReducer'

/** Type Definitions */
export interface IStarsState {
  isFetching?: boolean
  count?: number
  error?: boolean
  message?: any
}

/** Initial State */
const initialState: IStarsState = {
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
  setStarsFailure: (message: string, state?: IStarsState): IStarsState  => {
    return Object.assign({}, state, {
        isFetching: false,
        message,
        error: true,
      })
  }
}

const asyncActions = {
  getStars: (payload: void, syncActions: typeof actions) => {
      syncActions.setFetching(true)
      return fetch('https://api.github.com/repos/barbar/vortigern')
        .then(res => {
          if (res.ok) {
            return res.json()
              .then(res => {
                return syncActions.setStars(res.stargazers_count)
              })
          } else {
            return res.json()
              .then(res => {
                return syncActions.setStarsFailure(res)
              })
          }
        })
        .catch(err => {
          return syncActions.setStarsFailure(err)
        })
  }
}

export default makeReducer('stars', initialState, actions, asyncActions)
