/** React Specific */
import * as React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers'
import {IState} from '../redux/reducers.ts'
import {setStore} from '../redux/modules/BaseReducer.ts'
import {configureStore as trueConfig} from '../redux/store.ts'
const { browserHistory } = require('react-router')
const fetchMock = require('fetch-mock')

/** Render Component */
function renderComponent(ComponentClass, state?, props?) {
  const store: Redux.Store = createStore(rootReducer, state)
  setStore(store)
  return mount (
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  )
}

function configureStore (initialState = {}) {
  const store = trueConfig(browserHistory, initialState)
  setStore(store)
  return store
}

function stateFromStore (store: any): IState {
  return (store.getState() as IState)
}

export { configureStore, fetchMock, renderComponent, stateFromStore }
