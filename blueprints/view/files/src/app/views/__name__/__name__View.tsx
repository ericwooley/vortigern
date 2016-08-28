import * as React from 'react'
import { Link } from 'react-router'
export interface I<%= pascalEntityName %>Props {

}
export default function <%= pascalEntityName %> (props: IHeaderProps) {
  const s = require('./<%= camelEntityName %>Component.css')
  return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/">Home Test</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="stars">Stars</Link></li>
        </ul>
      </nav>
    )
}

export {<%= pascalEntityName %> }
