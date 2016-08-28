import { expect } from 'chai'
import { renderComponent } from '../../helpers/TestHelper'
import Stars from './starsComponent.tsx'

/** Mock App. State */
const state: Object = {
  stars: {
    count: 61,
    isFetching: false,
  },
}

describe('<Counter />', () => {

  const component = renderComponent(Stars, state)

  it('Renders with correct style', () => {
    const s = require('./starsComponent.css')
    expect(component.find(s.stars)).to.exist
  })

  it('Renders header', () => {
    expect(component.find('div').text()).to.eql('61')
  })
})
