import Stars, {IStarsProps} from '../../components/stars/starsComponent'
import {IState} from '../../redux/reducers.ts'
import starsReducer from '../../redux/modules/stars'
import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */
interface ISmartProps {
  header?: string
}

export default compose<IStarsProps, ISmartProps> (
  connect((state: IState): IStarsProps => {
    return { hasLoaded: state.stars.hasLoaded, count: state.stars.count, isFetching: state.stars.isFetching }
  }),
  lifecycle({
    // Use the non arrow version so that the 'this' will have this.props, etc...
    componentWillMount: function componentWillMount (props: IStarsProps) {
      if (!this.props.hasLoaded) {
        starsReducer.getStars()
      }
    }
  })
)(Stars)
