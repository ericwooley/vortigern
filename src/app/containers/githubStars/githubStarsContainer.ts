import Stars from '../../components/stars/starsComponent'
import {IState} from '../../redux/reducers.ts'
import starsReducer from '../../redux/modules/stars'
import {compose, lifecycle} from 'recompose'
const { connect } = require('react-redux')

// const asyncConnectedStars = asyncConnect([{
//   promise: starsReducer.getStars,
// }])(Stars)
export default compose (
  lifecycle({
    componentWillMount: starsReducer.getStars
  }),
  connect((state: IState) => ({ count: state.stars.count, isFetching: state.stars.isFetching }))
)(Stars)

