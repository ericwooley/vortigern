import makeReducer from '../BaseReducer'

/** Type Definitions */
export interface I<%= pascalEntityName %>State {
  example: boolean
}

/** Initial State */
const initialState: I<%= pascalEntityName %>State = {
  example: true
}

/** Actions
 * Accepts a payload, and the current reducer substate
 * must return a new version of the state.
 */

const actions = {
  setMathExample: (payload: boolean, state?: I<%= pascalEntityName %>State): I<%= pascalEntityName %>State => {
    return Object.assign({}, state, {
        example: payload,
      })
  }
}

/** Async Actions
 * Must return a promise.
 * Accepts a payload, and the syncActions
 */

const asyncActions = {
  getStars: (payload: boolean, syncActions: typeof actions) => {
      syncActions.setMathExample(payload)
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > .5) {
            resolve()
          } else {
            reject()
          }
        }, 50)
      })
      .then(() => syncActions.setMathExample(true))
      .catch(() => syncActions.setMathExample(false))
  }
}

export default makeReducer('<%= pascalEntityName %>', initialState, actions, asyncActions)
