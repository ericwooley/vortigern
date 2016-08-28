import <%= pascalEntityName %>, {I<%= pascalEntityName %>Props} from '../../components/<%= camelEntityName %>/<%= camelEntityName %>Component'
import {IState} from '../../redux/reducers.ts'
import <%= camelEntityName %>Reducer from '../../redux/modules/<%= camelEntityName %>'
import {compose, lifecycle} from 'recompose'
import connect from '../../helpers/connect'

/**
 * Recompose is a library to turn dumb stateless components into smart components.
 */

// These will be the props for the exported React Class
interface ISmartProps {
  // header?: string // This is an example, using this would look like <Example header='Optional String' />
}

export default compose<I<%= pascalEntityName %>Props, ISmartProps> (
  connect((state: IState): I<%= pascalEntityName %>Props => {
    return {
      // These will be mapped as props
     }
  }),
  lifecycle({
    // Use the non arrow version so that the 'this' will have this.props, etc...
    componentWillMount: function componentWillMount (props: I<%= pascalEntityName %>Props) {
      // Add your lifecycle login here.
    }
  })
)(<%= pascalEntityName %>)
