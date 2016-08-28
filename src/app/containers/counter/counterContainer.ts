import Counter, {ICounterProps} from '../../components/counter/counterComponent'
import {IState} from '../../redux/reducers.ts'

// potentially import a reducer
// import counterReducer from '../../redux/modules/counter'

import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */

// These will be the props for the exported React Class
interface ISmartProps {
  // header?: string // This is an example, using this would look like <Example header='Optional String' />
}

export default compose<ICounterProps, ISmartProps> (
  connect((state: IState): ICounterProps => {
    return {
      count: state.counter.count
     }
  }),
  lifecycle({
    // Use the non arrow version so that the 'this' will have this.props, etc...
    componentWillMount: function componentWillMount (props: ICounterProps) {
      // Add your lifecycle login here.
    }
  })
)(Counter)
