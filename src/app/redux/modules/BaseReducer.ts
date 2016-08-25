const store: Redux.Store = null
export default class BaseReducer <IState extends {}> {
  protected ID: string = ''
  protected defaultState: IState
  constructor () {
    if (typeof this.ID === undefined || typeof this.ID === null) {
      throw new Error('Reducers must have an ID')
    }
    if (typeof this.defaultState === undefined || typeof this.defaultState === null) {
      throw new Error('Reducers must have a default state')
    }
    Object.keys(this).forEach((key) => {
      this[key] = (payload) => {
        if (!store) {
          throw new Error('No store has been set')
        }
        store.dispatch(Object.assign({}, { type: `${this.ID}/${key}`, payload}))
      }
    })
  }
  public static setStore (store: Redux.Store) {
    store = store
  }
  public reducer (state = this.defaultState, action) {
    /* tslint:disable */
    // Linting is disabled because there is no other way to do this
    const [ID, actionMethod] = action.type.split('/')
    if (ID === this.ID && this[actionMethod]) {
      return this[actionMethod](Object.assign({}, state), action.payload)
    }
    /* tslint:enable */
  }
}
