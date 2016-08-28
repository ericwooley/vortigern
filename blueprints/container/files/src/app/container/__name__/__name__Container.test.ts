import { expect } from 'chai'
import { renderSmartComponent } from '../../helpers/TestHelper'
import <%= pascalEntityName %> from './<%= camelEntityName %>Container.ts'

// use this to mock an ajax call
// import {fetchMock} from '../../helpers/TestHelper.tsx'

// Example responses
// import githubMock from '../../mocks/githubData'

/** Mock App. State */
const defaultState: Object = {
  // Mock of the global state
  stars: {
    count: 0,
    isFetching: false,
  },
}

describe('<<%= pascalEntityName %> />', () => {
  it('Renders <%= pascalEntityName %>', (done) => {
    fetchMock.mock('https://api.github.com/repos/barbar/vortigern', githubMock.succuess)
    const component = renderSmartComponent(<%= pascalEntityName %>, defaultState)

    // 20 ms timeout is here, because the component depends on an ajax call in the component will mount.
    // So it won't look this way until after the mock is returned.
    setTimeout(() => {
      expect(component.find('p').text()).to.equal(`${githubMock.succuess.body.stargazers_count}`)
      done()
    }, 20)

  })
})
