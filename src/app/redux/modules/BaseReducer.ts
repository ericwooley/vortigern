let store: Redux.Store = null
interface IReducer {
  reducer?: Function
}

export function setStore (injectedStore: Redux.Store) {
  store = injectedStore
}

export default function makeReducer
  <ISubState, T, V>
  (ID: string, defaultState: ISubState, Actions: T, AsyncActions?: V): V & T & IReducer {
    if (typeof ID === undefined || typeof ID === null) {
      throw new Error('Reducers must have an ID')
    }

    if (typeof defaultState === undefined || typeof defaultState === null) {
      throw new Error('Reducers must have a default state')
    }

    const newSyncActions: T & IReducer = Object.assign({}, Actions)
    const newAsyncActions: V = Object.assign({}, AsyncActions)
    Object.keys(Actions).forEach((key) => {
      newSyncActions[key] = (payload) => {
        if (!store) {
          throw new Error('No store has been set')
        }
        return store.dispatch({ type: `${ID}/${key}`, payload})
      }
    })
    if (AsyncActions) {
      Object.keys(AsyncActions).forEach((key) => {
        if (Actions[key]) {
          throw new Error('You cannot have a Action and Async Action with the same name: ' + key)
        }
        newAsyncActions[key] = (payload) => {
          if (!store) {
            throw new Error('No store has been set')
          }
          return store.dispatch((dispatch) => {
            return AsyncActions[key](payload, newSyncActions)
          })
        }
      })
    }
    const baseReducer = {
      reducer: (state: ISubState, action) => {
        state = state || defaultState
        /* tslint:disable */
        // Linting is disabled because there is no other way to do this
        const [ActionID, actionMethod] = action.type.split('/')
        if (ActionID === ID && newSyncActions[actionMethod]) {
          return Actions[actionMethod](action.payload, state)
        }
        return state
        /* tslint:enable */
      }
    }
    return Object.assign(baseReducer, newSyncActions, newAsyncActions)
}
