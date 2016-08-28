import * as React from 'react'

export interface IStarsProps {
  count: number,
  isFetching: boolean
}
export default function Stars (props: IStarsProps) {
  const { count, isFetching } = props
  const s = require('./starsComponent.css')
  return(
      <div className={s.stars}>
        { isFetching ? 'Fetching Stars' : count }
      </div>
    )
}

export {Stars }
