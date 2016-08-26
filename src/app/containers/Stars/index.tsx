import * as React from 'react'
import {IState} from '../../redux/reducers.ts'
import starsReducer, {IStarsState} from '../../redux/modules/stars'
const { connect } = require('react-redux')
const { asyncConnect } = require('redux-connect')

interface IProps {
  stars: IStarsState
}

@asyncConnect([{
  promise: starsReducer.getStars,
}])
@connect(
  (state: IState) => ({ stars: state.stars })
)
class Stars extends React.Component<IProps, {}> {
  public render() {
    const { stars } = this.props

    return(
      <div>
        { stars.isFetching ? 'Fetching Stars' : stars.count }
      </div>
    )
  }
}

export { Stars }
