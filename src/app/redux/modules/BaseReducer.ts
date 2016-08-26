let store: Redux.Store = null
interface IReducer {
  reducer?: Function
}
export function setStore (injectedStore: Redux.Store) {
  store = injectedStore
}
export default function makeReducer <ISubState, T>(ID: string, defaultState: ISubState, Actions: T): T & IReducer {
    if (typeof ID === undefined || typeof ID === null) {
      throw new Error('Reducers must have an ID')
    }
    if (typeof defaultState === undefined || typeof defaultState === null) {
      throw new Error('Reducers must have a default state')
    }
    const NewAction: T & IReducer = Object.assign({}, Actions)

    Object.keys(NewAction).forEach((key) => {
      NewAction[key] = (payload) => {
        if (!store) {
          throw new Error('No store has been set')
        }
        store.dispatch(Object.assign({}, { type: `${ID}/${key}`, payload}))
      }
    })
    NewAction.reducer = (state: ISubState, action) => {
      state = state || defaultState
      /* tslint:disable */
      // Linting is disabled because there is no other way to do this
      const [ActionID, actionMethod] = action.type.split('/')
      if (ActionID === ID && NewAction[actionMethod]) {
        return Actions[actionMethod](action.payload, Object.assign({}, state))
      }
      return state
      /* tslint:enable */
    }
    return NewAction
}
// export class BaseReducer <IState extends {}> {
//   protected ID: string = ''
//   public defaultState: IState
//   constructor () {
//     if (typeof this.ID === undefined || typeof this.ID === null) {
//       throw new Error('Reducers must have an ID')
//     }
//     if (typeof this.defaultState === undefined || typeof this.defaultState === null) {
//       throw new Error('Reducers must have a default state')
//     }
//     Object.keys(this).forEach((key) => {
//       this[key] = (payload) => {
//         if (!store) {
//           throw new Error('No store has been set')
//         }
//         store.dispatch(Object.assign({}, { type: `${this.ID}/${key}`, payload}))
//       }
//     })
//     this.reducer = this.reducer.bind(this)
//   }
//   public static setStore (store: Redux.Store) {
//     store = store
//   }
//   public reducer (state: IState, action) {
//     state = state || this.defaultState
//     /* tslint:disable */
//     // Linting is disabled because there is no other way to do this
//     const [ID, actionMethod] = action.type.split('/')
//     if (ID === this.ID && this[actionMethod]) {
//       return this[actionMethod](action.payload, Object.assign({}, state))
//     }
//     return state
//     /* tslint:enable */
//   }
// }
