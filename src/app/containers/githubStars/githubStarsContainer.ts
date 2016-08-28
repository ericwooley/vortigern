import Stars from '../../components/stars/starsComponent'
import {IState} from '../../redux/reducers.ts'
import starsReducer from '../../redux/modules/stars'
import {compose, lifecycle} from 'recompose'
const { connect } = require('react-redux')

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */
interface ISmartProps {
  count: number,
  isFetching: boolean
}

export default compose (
  connect((state: IState): ISmartProps => {
    return { count: state.stars.count, isFetching: state.stars.isFetching }
  }),
  lifecycle({
    // Use the non arrow version so that the this, matches
    componentWillMount: function componentWillMount (props: ISmartProps) {
      if (this.props.count !== undefined) {
        starsReducer.getStars()
      }
    }
  })
)(Stars)
