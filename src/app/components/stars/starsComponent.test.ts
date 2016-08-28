import { expect } from 'chai'
import { renderComponent } from '../../helpers/TestHelper'
import Stars from './starsComponent.tsx'

/** Mock App. Props */
const props: Object = {
  count: 61,
  isFetching: false
}

describe('<Stars />', () => {

  const component = renderComponent(Stars, props)

  it('Renders with correct style', () => {
    const s = require('./starsComponent.css')
    expect(component.find(s.stars)).to.exist
  })

  it('Renders header', () => {
    expect(component.find('div').text()).to.eql('61')
  })
})
